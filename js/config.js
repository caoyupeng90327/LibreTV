// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置// API站点配置
const API_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com', 
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    xiaomaomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '小猫咪资源',
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv', 
    },
    // heimuer: {
    //     api: 'https://json.heimuer.xyz/api.php/provide/vod',
    //     name: '黑木耳',
    //     detail: 'https://heimuer.tv',
    // },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    // iqiyi: {
    //     api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
    //     name: 'iqiyi资源',
    // },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    }, 
    // hwba: {
    //     api: 'https://cjhwba.com/api.php/provide/vod',
    //     name: '华为吧资源',
    // },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com', 
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
    },
    // yinghua: {
    //     api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
    //     name: '樱花资源'
    // },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源'
    },
    lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子资源站'
    },
    // egy : {
    //     name: '9e国语',
    //     api: 'http://vod.9e03.com/lvdou_api.php/v1.vod'
    // },
    // mjf : {
    //     name: '美剧范',
    //     api:'http://ttzmz.net/api.php/v1.vod'
    // },
    // mjc : {
    //     name: '美剧虫',
    //     api:'https://meijuchong.com/api.php/v1.vod'
    // },
    ydyy : {
        name: '益达影院',
        api:'http://luobu.yss6080.com/mogai_api.php/v1.vod'
    },
    dmys : {
        name: '大猫影视',
        api:'http://app.ishen520.com/api.php/v1.vod'
    },
    yyys : {
        name: '渔渔影视',
        api:'http://luobo.yugenye.site/api.php/v1.vod'
    },
    // tzw : {
    //     name: '兔子窝',
    //     api:'http://cj.huimaojia.com:12345/mogai_api.php/v1.vod'
    // },
    // tpys : {
    //     name: '躺平影视',
    //     api:'http://www.lltpys.com/api.php/app/'
    // },
    // k365 :{
    //     name: '看365',
    //     api:'https://www.kan365.xyz/api.php/app/'
    // },
    // bc  : {
    //     name: '北川',
    //     api:'https://www.bcwzg.com/api.php/app/'
    // },
    // ztys : {
    //     name: '钟特影视',
    //     api:'https://app.zteys.com/api.php/v1.vod'
    // },
    tkv2 : {
        name: '天空V2',
        api:'https://www.tkys.tv/xgapp.php/v2/'
    },
    // sryy : {
    //     name: '三日影院',
    //     api:'https://www.3ri.net/api.php/v1.vod'
    // },
    // slyy : {
    //     name: '双鹿影院',
    //     api:'http://cr.slidc.top/mubai_api.php/m2.vod'
    // },
    // fxsj : {
    //     name: '粉象视界',
    //     api:'http://42.157.129.15:34444/lvdou_api.php/v1.vod'
    // },
    // lmys : {
    //     name: '懒猫影视',
    //     api:'https://lanmao.lanmaoymw.cn/api.php/v1.vod'
    // },
    // al : {
    //     name: '阿里',
    //     api:'http://aliys.cn:90/api.php/v1.vod'
    // },
    // qc : {
    //     name: 'QC',
    //     api:'https://www.qcsvip.com/mogai_api.php/v1.vod'
    // },
    // hh : {
    //     name: '黄河',
    //     api:'http://i.ledu8.cn/api.php/v1.vod'
    // },
    // jikusp :{
    //     name: '极酷视频',
    //     api:'https://jiku.vip/mogai_api.php/v1.vod'
    // },
    // juzi : {
    //     name: '橘子',
    //     api:'http://jz.juzidy.vip/mogai_api.php/v1.vod'
    // },
    // qifeizx : {
    //     name: '奇飞专线',
    //     api:'http://mkk.gotka.top/api.php/v1.vod'
    // },
    tkyinshi : {
        name: '天空影视',
        api:'https://tkys.tv/xgapp.php/v1/'
    },
    // duanyou2ys :{
    //     name: '段友2影视',
    //     api:'https://shangjihuoke.com/api.php/tv.vod'
    // },
    // nuanguangys : {
    //     name: '暖光影视',
    //     api:'https://app.bl210.com/api.php/v1.vod'
    // },
    // tianchengyingshi : {
    //     name: '天诚影视',
    //     api:'http://tcspvip.cn/api.php/v1.vod'
    // },
    // aiteys : {
    //     name: '艾特影视',
    //     api:'https://www.aitee.cc/api.php/v1.vod'
    // },
    // duanyouys1 :{
    //     name: '段友影视1',
    //     api:'http://js.66app.me/api.php/app/'
    // },
    // bilinys :{
    //     name: '比邻影视',
    //     api:'http://0hzy.cn:9990/mogai_api.php/v1.vod'
    // },
    // zuijudaren : {
    //     name: '追剧达人',
    //     api:'https://www.zhuijudaren.com/mogai_api.php/v1.vod'
    // },
    // yuanxiang69 : {
    //     name: '69院线',
    //     api:'http://app.269w.com/api.php/v1.vod'
    // },
    // chanyi :{
    //     name: '创艺',
    //     api:'http://www.30dian.cn/api.php/v1.vod'
    // },
    umao : { name : 'U猫资源',api:'http://umao.ml/api.php/provide/vod/at/xml',},
    xiongmao: { name : '熊猫视频',api:'https://www.xiongmaosp.com/api.php/provide/vod/at/xml',},
    baipiao: { name : '白嫖资源',api:'http://www.baipiaozy.com/api.php/provide/vod/at/xml',},
    baipiaolm: { name : '白嫖联盟',api:'http://api.hszbj.net/api.php/provide/vod/at/xml',},
    zy1717: { name : '1717资源',api:'http://zy.itono.cn/inc/api.php',},
    zy8090: { name : '8090资源',api:'http://zy.yilans.net:8090/api.php/provide/vod',},
    lmzy: { name : '蓝猫资源',api:'https://www.lmzy.cc/api.php/provide/vod',},
    monguo: { name : '萌果资源',api:'http://api.appearoo.top/api.php/provide/vod',},
    hhzy: { name : '好好资源',api:'http://haohaozy.com/api.php/provide/vod',},
    moguzy: { name : '蘑菇资源',api:'http://www.moguzyw.com:520/moguzy.php/provide/vod',},
    moguzy: { name : '明日资源',api:'http://zy.zcocc.com/api.php/provide/vod',},
    sszy: { name : '速搜资源',api:'http://www.susouzy.com/api.php/provide/vod',},
    tiantang: { name : '天堂资源',api:'http://vipmv.cc/api.php/provide/vod',},
    qilinzy: { name : '麒麟资源',api:'http://www.qilinzyz.com/api.php/provide/vod',},
    zymu38tv: { name : 'M3U8.TV资源',api:'http://www.zycaiji.net:7788/api.php/provide/vod',},
    zy360: { name : '360资源',api:'http://xa88.vip:88/api.php/provide/vod',},
    zuixinzy: { name : '最新资源',api:'https://api.yunboys.cn/api.php/provide/vod',},
    slzy: { name : '三零资源',api:'http://api.000zy.com/provide/vod',},
    baiduzy: { name : '百度官方资源',api:'https://api.bdjx.vip/api.php/provide/vod',},
    yzzybplm: { name : '优质资源白嫖联盟',api:'http://api.hszbj.net/api.php/provide/vod',},
    bpzy: { name : '白嫖资源',api:'http://www.baipiaozy.com/api.php/provide/vod',},
    xionmaosp: { name : '熊猫视频',api:'https://www.xiongmaosp.com/api.php/provide/vod',},
    aikan: { name : '爱看',api:'http://tvcms.ikan6.vip/api.php/provide/vod',},
    umm3u8: { name : 'U猫m3u8',api:'http://umao.ml/api.php/provide/vod',},
    moyu: { name : '墨鱼影视',api:'http://www.moyuyingshi.com/api.php/provide/vod',},
    zaikang: { name : '宅看影视',api:'http://zhaikanys.xyz/api.php/provide/vod',},
    changshiys: { name : '畅视影视',api:'http://app.reboju.net/api.php/provide/vod',},
    beidouxing: { name : '北斗星资源',api:'https://api.bdxzyapi.com/api.php/provide/vod/at/xml',},
    zy1886: { name : '1886资源',api:'http://cj.1886zy.co/inc/seacmsapi.php',},
    zy605: { name : '605资源',api:'http://www.605zy.co/inc/api.php',},
    bjzy: { name : '八戒资源',api:'http://cj.bajiecaiji.com/inc/seacmsapi.php',},
    qwyinshi: { name : '全网影视',api:'https://www.qwysvip.com/api.php/provide/vod/at/xml',},
    sfjhybapp: { name : '三方聚合云播APP',api:'http://bxin.tv/api.php/provide/vod',},
    lgapp: { name : '蓝果APP',api:'http://www.languotv.com/api.php/provide/vod',},
    ayzjapp: { name : '阿姨追剧APP',api:'http://app.yiciyuan.me/api.php/provide/vod',}
    // testSource: {
    //     api: 'https://www.example.com/api.php/provide/vod',
    //     name: '空内容测试源',
    //     adult: true
    // }
    //ARCHIVE https://telegra.ph/APIs-08-12
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 100,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
