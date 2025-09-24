import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Star,
  Shield,
  Zap,
  RefreshCw,
  Bookmark,
  Chrome,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: AlertTriangle,
      title: "失效链接检测",
      description: "自动扫描并识别无法访问的书签，帮你清理过时内容",
    },
    {
      icon: RefreshCw,
      title: "重复书签清理",
      description: "智能检测并合并重复的书签，让你的收藏更加整洁",
    },
    {
      icon: Zap,
      title: "一键批量操作",
      description: "支持批量删除、移动和整理书签，提升管理效率",
    },
    {
      icon: Shield,
      title: "安全可靠",
      description: "本地处理，不上传任何个人数据，保护你的隐私安全",
    },
  ];

  const stats = [
    { number: "10,000+", label: "活跃用户" },
    { number: "4.8", label: "用户评分" },
    { number: "50万+", label: "清理书签" },
    { number: "99%", label: "检测准确率" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Bookmark className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                书签检查器
              </span>
            </div>
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://chromewebstore.google.com/detail/ngmjbgmjeodmglefjehdpdbamanidipp?utm_source=item-share-cb",
                  "_blank"
                )
              }
            >
              <Chrome className="w-4 h-4 mr-2" />
              安装插件
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center transform transition-all duration-1000`}>
            <Badge
              variant="secondary"
              className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
            >
              <Star className="w-4 h-4 mr-1" />
              Chrome Web Store 推荐
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              让你的书签
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                井井有条
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              智能检测失效链接和重复书签，一键清理，让你的浏览器书签重获新生。已帮助上万用户整理书签。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="https://chromewebstore.google.com/detail/ngmjbgmjeodmglefjehdpdbamanidipp?utm_source=item-share-cb"
                target="_blank"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Chrome className="w-5 h-5 mr-2" />
                  免费安装插件
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              为什么选择书签检查器？
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              专业的书签管理工具，让你的数字生活更加高效有序
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              三步完成书签清理
            </h2>
            <p className="text-xl text-gray-600">简单易用，无需复杂设置</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                安装插件
              </h3>
              <p className="text-gray-600">
                从Chrome Web Store一键安装，无需注册账户
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                开始扫描
              </h3>
              <p className="text-gray-600">
                点击图标开始检测，自动识别问题书签
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                一键清理
              </h3>
              <p className="text-gray-600">批量删除或整理，让书签焕然一新</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              用户真实反馈
            </h2>
            <p className="text-xl text-gray-600">看看其他用户怎么说</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "太好用了！帮我清理了800多个失效书签，现在浏览器终于清爽了。"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">李</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">李明</div>
                    <div className="text-sm text-gray-500">设计师</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "作为程序员，我收藏了大量技术文档。这个插件帮我找到了很多失效链接。"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">王</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">王开发</div>
                    <div className="text-sm text-gray-500">全栈工程师</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "界面简洁，功能强大。重复书签检测特别准确，节省了我很多时间。"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">张</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">张研究</div>
                    <div className="text-sm text-gray-500">研究员</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            立即开始整理你的书签
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            免费下载安装，无需注册，马上体验专业的书签管理功能
          </p>
          <Link
            href="https://chromewebstore.google.com/detail/ngmjbgmjeodmglefjehdpdbamanidipp?utm_source=item-share-cb"
            target="_blank"
          >
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Chrome className="w-5 h-5 mr-2" />
              免费安装插件
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Bookmark className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">书签检查器</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                © 2024 书签检查器. 保留所有权利.
              </p>
              <p className="text-gray-500 text-xs">让每一个书签都有价值</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
