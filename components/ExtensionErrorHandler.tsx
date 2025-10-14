"use client";

import { useEffect } from 'react';

export default function ExtensionErrorHandler() {
  useEffect(() => {
    // 捕获全局错误，特别是来自扩展的错误
    const handleError = (event: ErrorEvent) => {
      // 检查是否是扩展相关的错误
      if (
        event.filename?.includes('content_script') ||
        event.filename?.includes('inpage') ||
        event.filename?.includes('extension') ||
        event.message?.includes('getContext is not a function') ||
        event.message?.includes('charAt')
      ) {
        // 阻止错误传播，避免影响用户体验
        event.preventDefault();
        event.stopPropagation();
        
        // 可以选择在控制台记录这些错误（开发时有用）
        if (process.env.NODE_ENV === 'development') {
          console.warn('Browser extension error detected and suppressed:', event.message);
        }
        
        return false;
      }
    };

    // 监听错误事件
    window.addEventListener('error', handleError);
    
    // 监听未处理的Promise拒绝
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (
        event.reason?.message?.includes('getContext is not a function') ||
        event.reason?.message?.includes('charAt') ||
        event.reason?.stack?.includes('content_script') ||
        event.reason?.stack?.includes('inpage')
      ) {
        event.preventDefault();
        if (process.env.NODE_ENV === 'development') {
          console.warn('Browser extension promise rejection detected and suppressed:', event.reason);
        }
      }
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // 清理函数
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return null; // 这是一个无UI组件
}