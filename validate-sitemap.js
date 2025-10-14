#!/usr/bin/env node

const https = require('https');
const { XMLParser } = require('fast-xml-parser');

async function validateSitemap(url) {
  console.log(`正在验证 sitemap: ${url}`);
  
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          // 检查响应状态
          if (res.statusCode !== 200) {
            console.error(`HTTP错误: ${res.statusCode}`);
            reject(new Error(`HTTP ${res.statusCode}`));
            return;
          }
          
          // 检查Content-Type
          const contentType = res.headers['content-type'];
          console.log(`Content-Type: ${contentType}`);
          
          if (!contentType || (!contentType.includes('xml') && !contentType.includes('text'))) {
            console.warn('警告: Content-Type可能不正确');
          }
          
          // 解析XML
          const parser = new XMLParser();
          const parsed = parser.parse(data);
          
          if (parsed.urlset && parsed.urlset.url) {
            const urls = Array.isArray(parsed.urlset.url) ? parsed.urlset.url : [parsed.urlset.url];
            console.log(`✅ Sitemap有效! 包含 ${urls.length} 个URL:`);
            
            urls.forEach((url, index) => {
              console.log(`  ${index + 1}. ${url.loc}`);
              if (url.lastmod) console.log(`     最后修改: ${url.lastmod}`);
              if (url.changefreq) console.log(`     更新频率: ${url.changefreq}`);
              if (url.priority) console.log(`     优先级: ${url.priority}`);
            });
          } else {
            console.error('❌ Sitemap格式错误');
            console.log('原始数据:', data.substring(0, 500));
          }
          
          resolve(data);
        } catch (error) {
          console.error('❌ XML解析错误:', error.message);
          console.log('原始数据:', data.substring(0, 500));
          reject(error);
        }
      });
    }).on('error', (error) => {
      console.error('❌ 请求错误:', error.message);
      reject(error);
    });
  });
}

// 验证生产环境的sitemap
validateSitemap('https://bookmarks-checker-home.pages.dev/sitemap.xml')
  .then(() => {
    console.log('\n✅ Sitemap验证完成!');
  })
  .catch((error) => {
    console.error('\n❌ Sitemap验证失败:', error.message);
  });