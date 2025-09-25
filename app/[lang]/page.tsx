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
import { getDictionary } from "@/lib/getDictionary";
import { Locale } from "@/lib/i18n-config";

// 这是一个将图标名称（字符串）映射到实际 React 组件的辅助对象。
// 这样做是因为我们不能在 JSON 文件中存储 React 组件。
const iconMap = {
  AlertTriangle,
  RefreshCw,
  Zap,
  Shield,
};

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // 在页面组件的顶部，一次性获取当前语言的所有文案
  const dict = await getDictionary(lang);

  // 从字典动态构建 stats 数组
  const stats = [
    { number: "10,000+", label: dict.stats.users },
    { number: "4.8", label: dict.stats.rating },
    { number: "500k+", label: dict.stats.cleaned },
    { number: "99%", label: dict.stats.accuracy },
  ];

  // 从字典动态构建 features 数组，并结合上面的 iconMap 附加图标组件
  const features = [
    { icon: iconMap.AlertTriangle, ...dict.features.list[0] },
    { icon: iconMap.RefreshCw, ...dict.features.list[1] },
    { icon: iconMap.Zap, ...dict.features.list[2] },
    { icon: iconMap.Shield, ...dict.features.list[3] },
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
                {dict.nav.title}
              </span>
            </div>
            <Link
              href="https://chromewebstore.google.com/detail/ngmjbgmjeodmglefjehdpdbamanidipp?utm_source=item-share-cb"
              target="_blank"
            >
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Chrome className="w-4 h-4 mr-2" />
                {dict.nav.install_button}
              </Button>
            </Link>
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
              {dict.hero.badge}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {dict.hero.title_part1}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                {dict.hero.title_part2}
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              {dict.hero.subtitle}
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
                  {dict.hero.cta_button}
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
              {dict.features.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {dict.features.subtitle}
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
              {dict.how_it_works.title}
            </h2>
            <p className="text-xl text-gray-600">
              {dict.how_it_works.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dict.how_it_works.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-gradient-to-r ${
                    index === 0
                      ? "from-blue-500 to-indigo-600"
                      : index === 1
                      ? "from-indigo-500 to-purple-600"
                      : "from-purple-500 to-pink-600"
                  }`}
                >
                  <span className="text-2xl font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {dict.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600">
              {dict.testimonials.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dict.testimonials.list.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-gradient-to-r ${
                        index === 0
                          ? "from-blue-500 to-indigo-600"
                          : index === 1
                          ? "from-green-500 to-teal-600"
                          : "from-purple-500 to-pink-600"
                      }`}
                    >
                      <span className="text-white font-semibold">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {dict.cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {dict.cta.subtitle}
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
              {dict.cta.button}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Bookmark className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">{dict.nav.title}</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                {dict.footer.copyright}
              </p>
              <p className="text-gray-500 text-xs">{dict.footer.tagline}</p>
            </div>
          </div>
          <div>
            <p>{dict.footer.links_title}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://www.krzacg.com"
                target="_blank"
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer nofollow"
                title="krzacg"
                aria-label="krzacg"
              >
                KrzACG社区
              </Link>
              <Link
                href="https://krzacg-navi.pages.dev/"
                target="_blank"
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer nofollow"
                title="krzacg-导航页"
                aria-label="krzacg-导航页"
              >
                KrzACG - 导航页
              </Link>
              <Link
                href="https://vlink.cc/krzacg"
                target="_blank"
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer nofollow"
                title="krzacg-VLink"
                aria-label="krzacg-VLink"
              >
                KrzACG - 主站 - VLink
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
