/* =========================================================================
   Project Remo — i18n + interaction
   BUILD: v2-01 · 2026-06-06 · v2 consumer site (11 sections)
   ========================================================================= */

console.log("[Remo] site.js v2-01 loaded");

/* ─── I18N Translation Dictionary ──────────────────────────────────── */
const I18N = {
  zh: {
    /* Nav */
    "nav.why": "为何 Remo",
    "nav.hydrolock": "声学跟随",
    "nav.truecolor": "色彩还原",
    "nav.compare": "对比",
    "nav.scenario": "适用场景",
    "nav.lineup": "产品线",
    "nav.faq": "FAQ",
    "nav.investors.pill": "For Investors <span class=\"arrow\">→</span>",

    /* Hero · v2.2 ("放开双手" style) */
    "hero.eyebrow": "水下自动跟拍相机 · 面向潜水 / 浮潜 / 海岛旅行",
    "hero.meta.timeline": "POC 已成型 · 2028 Kickstarter 目标",
    "hero.title": "<span class=\"word\">放开</span><span class=\"word\">双手，</span><span class=\"word\">把镜头</span><span class=\"word\">交给</span><span class=\"word\"><em>Remo</em>&nbsp;。</span>",
    "hero.summary": "<strong style=\"color:var(--light);font-weight:500\">声学跟随，云端成片。</strong>Remo 把水下跟拍、构图和出片流程合到一台便携设备里，让你专注于下水本身。",
    "hero.btn.primary": "加入等候名单",
    "hero.btn.secondary": "观看演示",
    "hero.ks.1.note": "深潜防水",
    "hero.ks.2.note": "影像规格",
    "hero.ks.3.note": "单次续航",
    "hero.ks.4.note": "声学跟随",
    "hero.ks.5.note": "轻量便携",
    "hero.scroll": "向下滚动",
    "hero.trust.1.k": "当前阶段",
    "hero.trust.1.v": "POC 工程样机",
    "hero.trust.1.p": "动力、声学链路与云端色彩管线正在验证迭代。",
    "hero.trust.2.k": "下一步",
    "hero.trust.2.v": "用户验证 + EP",
    "hero.trust.2.p": "通过等候名单和访谈确认真实场景，再进入工程样机迭代。",
    "hero.trust.3.k": "发布节奏",
    "hero.trust.3.v": "2028 Kickstarter 目标",
    "hero.trust.3.p": "正式规格、价格与交付时间以发布版公告为准。",

    /* Showcase · v2.2 */
    "showcase.meta": "实拍画面 · 真实礁岩",
    "showcase.title": "无线，<em>自由</em>&nbsp;。",

    /* Section 3 · Why Remo · v2.2 (3-col DJI style) */
    "why.eyebrow": "<span class=\"index\">01</span> 为什么是 Remo",
    "why.heading": "下水即拍，<em>出水即得</em>&nbsp;。",
    "why.lead": "既不是手持运动相机，也不是拖线 ROV——Remo 重新定义了消费级水下拍摄。",
    "why.1.title": "双手自由",
    "why.1.copy": "不用举着相机潜，专心呼吸专心潜。",
    "why.2.title": "无线跟随",
    "why.2.copy": "没有线缆，没有牵绊，你下到哪它跟到哪。",
    "why.3.title": "出水成片",
    "why.3.copy": "AI 还原水下色彩，目标是出水后快速成片。",

    /* Section 4 · HydroLock · v2.5 */
    "hydrolock.eyebrow": "<span class=\"index\">02</span> 声学跟随",
    "hydrolock.heading": "用<em>声波</em>，看见你。",
    "hydrolock.tech": "HydroLock · 双源融合定位",
    "hydrolock.img.alt": "声学链路水下场景 · 20m 直径通信范围",
    "hydrolock.desc.1": "气泡、浑水、低能见度——视觉跟丢的地方，<strong style=\"color:var(--light);font-weight:500\">水声依然能到</strong>。Remo 用微型水声模组持续接收你腕上的 Beacon 信号，再交给视觉算法精构图，自动游到最佳拍摄位。",
    "hydrolock.desc.2": "你只管潜你的，<strong style=\"color:var(--light);font-weight:500\">构图、运镜、跟拍</strong>——交给 Remo。",
    "hydrolock.badge.1": "20 米声学半径",
    "hydrolock.badge.2": "声学+视觉融合",
    "hydrolock.badge.3": "浊水穿透",
    "hydrolock.badge.4": "30 fps 跟踪",
    "hydrolock.badge.5": "自动构图",
    "hydrolock.badge.6": "智能避障",
    "hydrolock.badge.7": "失锁自归位",
    "hydrolock.badge.8": "敲一敲唤醒",
    "hydrolock.bracelet": "声学手环 · 戴在腕上，水下持续被定位",

    /* Section 4 · Remo Beacon (声学腕带) · v2.5 */
    "beacon.tag": "配套设备",
    "beacon.sub": "声学腕带 · 你在水下的「GPS 信标」",
    "beacon.img.alt": "Remo Beacon 声学腕带",
    "beacon.point.1.k": "持续广播",
    "beacon.point.1.v": "水下持续发射声学定位信号，相机端实时接收",
    "beacon.point.2.k": "敲击交互",
    "beacon.point.2.v": "敲一敲腕带，超声特征传达指令，潜水手套也能用",
    "beacon.point.3.k": "震动反馈",
    "beacon.point.3.v": "相机识别成功、即将失锁、需要返航——通过手环震动告诉你",
    "beacon.point.4.k": "通用佩戴",
    "beacon.point.4.v": "硅胶腕带，可换表带；也能扣在 BCD 或铅块带上",

    /* Section 5 · TrueColor (cloud color) · v2.2 */
    "truecolor.eyebrow": "<span class=\"index\">03</span> 云端成片",
    "truecolor.heading": "水下的灰蓝，变回<em>真实的色彩</em>&nbsp;。",
    "truecolor.tech": "TrueColor Depth · 深度感知 AI 还原",
    "truecolor.lead": "水下 10 米以下，常见相机画面会明显偏蓝偏绿。Remo 把深度、水况和光线元数据回传云端，AI 按真实环境反推<strong style=\"color:var(--light);font-weight:500\">应有的色彩</strong>，目标是在短时间内生成可分享成片。",
    "truecolor.tag.left": "原片 RAW",
    "truecolor.tag.right": "Remo 还原",
    "truecolor.caption": "←  拖动滑块对比  →  ·  云端处理时长以发布版为准",

    /* Section 6 · TapCode (敲一敲) · v2.2 */
    "tapcode.eyebrow": "<span class=\"index\">04</span> 敲一敲",
    "tapcode.heading": "敲一敲，相机<em>就懂</em>&nbsp;。",
    "tapcode.tech": "TapCode · 水声指令识别",
    "tapcode.1.label": "敲 1 下",
    "tapcode.1.action": "开机 / 唤醒",
    "tapcode.2.label": "敲 2 下",
    "tapcode.2.action": "拍照",
    "tapcode.3.label": "长按",
    "tapcode.3.action": "开始录制",
    "tapcode.4.label": "敲 3 下",
    "tapcode.4.action": "开始自动跟随",
    "tapcode.foot": "戴着潜水手套？水下看不到屏幕？<br><strong style=\"color:var(--light);font-weight:500\">Remo 听水声，不用按键。</strong>",

    /* Section 7 · CloudSync (上岸即出片) · v2.5 (Mimo-style App) */
    "cloudsync.eyebrow": "<span class=\"index\">05</span> 上岸即出片",
    "cloudsync.heading": "上岸即<em>出片</em>，不用拔卡也不用调色。",
    "cloudsync.tech": "CloudSync · 云端管线 + App 推送",
    "cloudsync.step.1": "Remo 出水",
    "cloudsync.step.2": "自动连 5G / WiFi",
    "cloudsync.step.3": "原片 + 元数据回云",
    "cloudsync.step.4": "云端 AI 还原色彩",
    "cloudsync.step.5": "App 推送成片",
    "cloudsync.app.title": "Remo · 我的相册",
    "cloudsync.app.tab.1": "成片",
    "cloudsync.app.tab.2": "原片",
    "cloudsync.app.tab.3": "模板",
    "cloudsync.app.fresh.label": "色彩还原完成 · 4K HDR",
    "cloudsync.app.fresh.time": "2 分钟前 · 仙本那 · 11 段自动剪辑",
    "cloudsync.app.fresh.badge": "刚刚完成",
    "cloudsync.app.action.1": "▶ 播放",
    "cloudsync.app.action.2": "↗ 分享",
    "cloudsync.app.action.3": "⤓ 保存",
    "cloudsync.app.label.recent": "最近素材",
    "cloudsync.app.bottom.1": "相册",
    "cloudsync.app.bottom.2": "剪辑",
    "cloudsync.app.bottom.3": "设备",
    "cloudsync.app.caption": "App 概念图 · 实际界面以发布版为准",
    "cloudsync.foot": "<strong style=\"color:var(--light);font-weight:500\">潜上岸，喝口水，成片已经在你手机上了。</strong>",

    /* Section 9 · Scenario · v2.2 */
    "scenario.eyebrow": "<span class=\"index\">07</span> 适用场景",
    "scenario.heading": "你的<em>下一次潜水</em>，少不了它。",
    "scenario.1.tag": "潜水爱好者",
    "scenario.1.copy": "留下每一次潜的回忆。不再因为没人帮拍而后悔。",
    "scenario.1.img.alt": "Remo 跟随潜水员完成水下第三视角拍摄",
    "scenario.2.tag": "海岛游客",
    "scenario.2.copy": "浮潜也能拍出朋友圈大片。不用买装备，不用学拍摄。",
    "scenario.2.img.alt": "Remo 在海岛浮潜场景中跟拍游客",
    "scenario.3.tag": "内容创作者",
    "scenario.3.copy": "一个人也能完成水下 Vlog。不用搭档，不用摄影师。",
    "scenario.3.img.alt": "Remo 为水下内容创作者拍摄第三视角视频",
    "scenario.4.tag": "潜水教练",
    "scenario.4.copy": "学员复盘的最佳教学视角。第三视角看自己的姿势。",
    "scenario.4.img.alt": "Remo 记录潜水教练和学员的训练复盘视角",
    "scenario.note": "场景图用于说明目标使用方式。正式发布前将以真实水下拍摄与量产样片更新。",

    /* Section 11 · FAQ · v2.2 */
    "faq.eyebrow": "<span class=\"index\">09</span> 你可能会问",
    "faq.heading": "还有<em>疑问</em>？",
    "faq.1.q": "真的能在海水里用吗？",
    "faq.1.a": "Remo 按海水使用场景设计，目标覆盖 IP68、盐雾与长期密封验证。正式量产前会公布完整测试结果；日常使用后仍建议淡水冲洗维护。",
    "faq.2.q": "续航 60 分钟够吗？",
    "faq.2.a": "水肺一瓶气标准 45–60 分钟，刚好匹配。USB-C 快充约 2 小时回满；进阶用户可购买额外整机作为备机。",
    "faq.3.q": "跟丢了怎么办？",
    "faq.3.a": "当前方案以 20 m 直径声学链路作为跟随范围目标。失锁提醒、自动上浮和定位辅助属于安全策略规划，量产前会按真实水测结果确认。",
    "faq.4.q": "能上飞机吗？",
    "faq.4.a": "整机内置锂电池容量 < 100 Wh，符合国际航空\"可手提登机\"规定。主机可手提登机，无需托运。",
    "faq.5.q": "防水深度比 ROV 浅，会不会不够用？",
    "faq.5.a": "消费场景 95% 在 30 m 以内（运动潜 / 浮潜 / 海岛游）。Lite 40 m / Pro 60 m 覆盖了所有休闲与运动潜水深度。100 m+ 是专业洞穴潜与商业潜的需求，不在 Remo 定位内。",
    "faq.6.q": "何时发货？",
    "faq.6.a": "当前目标是 2028 Q4 启动 Kickstarter。具体发货时间取决于 EP、PVT 与小批量验证结果，加入等候名单会第一时间收到更新。",
    "faq.7.q": "维修与保修？",
    "faq.7.a": "维修与保修政策会在 Kickstarter 前公布。当前设计为内置电池，后续会围绕密封维护、电池老化和授权维修建立服务方案。",
    "faq.8.q": "海外用户如何购买？",
    "faq.8.a": "Kickstarter 全球发货；正式量产后逐步上线 Amazon US / EU / JP。官网 DTC 直发覆盖国家详见上线公告。",
    "faq.final.title": "准备好<em>潜入下一次冒险</em>了吗？",
    "faq.final.cta.primary": "加入等候名单",
    "faq.final.cta.investors": "For Investors",
    "faq.final.foot": "等候名单会用于产品验证、访谈招募和发布节奏通知，不代表立即销售。",
    "waitlist.note.1": "告诉我们你的使用场景",
    "waitlist.note.2": "优先收到 Beta / 访谈邀请",
    "waitlist.note.3": "获取 Kickstarter 发布提醒",

    /* Footer · v2 */
    "footer.copyright": "© 2026 Project Remo · All rights reserved",
    "footer.nav.product": "产品",
    "footer.nav.lineup": "配件",
    "footer.nav.support": "支持",
    "footer.nav.contact": "联系",
    "footer.ir.link": "For Investors <span class=\"arrow\">→</span>",
    "footer.ir.email": "ir@projectremo · 邮件咨询",

    /* Specs accordion toggle · v2 */
    "specs.toggle": "查看完整规格表",

    /* Brand outro · v2.5 */
    "brand.outro.tag": "放开双手 · 把镜头交给 Remo",

    /* Manifesto */
    "manifesto.eyebrow": "<span class=\"index\">01</span> Manifesto",
    "manifesto.text": "水下摄影的真正门槛，<br>不是设备不够好，<br>而是潜水员的注意力<br><em>已经被太多事情分走了</em>&nbsp;。",
    "manifesto.sig": "Project Remo · 创始团队",

    /* Features (replaces Manifesto in layout) */
    "features.eyebrow": "<span class=\"index\">01</span> Features",
    "features.heading": "三项核心技术，<br class=\"desktop-only\">定义<em>水下跟拍</em>&nbsp;。",
    "features.1.eyebrow": "01 / HydroLock",
    "features.1.title": "声学锁定跟随",
    "features.1.desc": "三枚 DYP-C01B 声学模块组网定位。气泡、浑水、低能见度场景下保持稳定追踪，不依赖视觉。",
    "features.1.cta": "了解声学方案 →",
    "features.2.eyebrow": "02 / TrueColor Depth",
    "features.2.title": "深度感知色彩还原",
    "features.2.desc": "GAN 算法结合 MS5837 深度数据，红光与绿光大幅衰减的水下场景一键还原自然色彩。",
    "features.2.cta": "了解影像方案 →",
    "features.3.eyebrow": "03 / CloudSync",
    "features.3.title": "出水即回传，云端自动还原",
    "features.3.desc": "出水后自动连接配套手机应用，原始素材后台静默回传；云端深度学习模型自动还原水下色彩，用户可直接获取成片。",
    "features.3.cta": "了解工作流 →",

    /* Pain */
    "pain.eyebrow": "<span class=\"index\">02</span> The Pain",
    "pain.heading": "潜水拍摄时，<em style=\"font-style:italic;color:var(--accent)\">双手和注意力</em>同时被占用。",
    "pain.1.title": "双手被占用",
    "pain.1.desc": "潜水员在水下需要同时管理浮力、呼吸、深度、构图与跟焦——五件事抢占同一份注意力。结果往往不是没拍到，<em style=\"font-style:normal;color:var(--accent)\">而是拍到了但拍废了，同时安全冗余在下降</em>&nbsp;。",
    "pain.2.title": "ROV 不属于消费者",
    "pain.2.desc": "传统水下 ROV 面向工业巡检设计——脐带缆、地面站、岸上部署流程，不属于休闲潜水场景。7–15 kg 自重、¥15,000+ 起步，\"消费级\"三个字在 ROV 品类中从未成立。",
    "pain.3.title": "视觉会失效",
    "pain.3.desc": "气泡群、悬浮颗粒、逆光、低能见度——任一条件都足以让纯视觉跟踪失效。水下定位必须基于\"水\"的物理特性设计，<em style=\"font-style:normal;color:var(--accent)\">不能把陆地视觉方案直接搬到水下</em>&nbsp;。",

    /* Flow */
    "flow.eyebrow": "<span class=\"index\">02</span> How It Works",
    "flow.heading": "60&nbsp;秒，<br class=\"desktop-only\">看懂<em>一次水下跟拍</em>&nbsp;。",
    "flow.1.title": "下水自动唤醒",
    "flow.1.desc": "设备入水即解锁，无需按键。基于水压与导通双重判定，避免误启动。",
    "flow.2.title": "声学锁定潜水员",
    "flow.2.desc": "潜水员佩戴的声学手环通过 DYP-C01B 建立声学链路，Remo 即使在浑浊水域也能保持稳定定位。",
    "flow.3.title": "智能跟随构图",
    "flow.3.desc": "声学定位提供位置先验，视觉追踪进行精构图。当视觉丢失时，声学权重立即接管。",
    "flow.4.title": "出水无感回传",
    "flow.4.desc": "出水后自动与配套手机应用建立连接，原始素材在后台静默传输；云端深度学习模型对水下色彩进行自动还原，用户在应用中即可查看处理完成的素材。",

    /* Architecture */
    "arch.eyebrow": "<span class=\"index\">06</span> Hardware Architecture",
    "arch.heading": "不追矢量方案，<br class=\"desktop-only\"><em>追</em>稳定性。",
    "arch.title": "2&nbsp;水平 +&nbsp;2&nbsp;垂直 +&nbsp;1&nbsp;横向。",
    "arch.desc": "Remo 采用 5 推进器固定布局（2&nbsp;水平 +&nbsp;2&nbsp;垂直 +&nbsp;1&nbsp;横向），避开矢量推进的复杂调参，选择 ROV 行业成熟验证过的方案——水动力学建模更简单，控制器更易收敛，外壳工程化难度更低。当前并行验证<em style=\"font-style:normal;color:var(--accent)\">两套动力方案</em>：策海科技无刷推进器面向海水可靠性，自研有刷方案面向成本控制；两套方案共用同一飞控、声学与传感平台。",
    "arch.pillars": "<strong style=\"color:var(--light);font-weight:500\">水平 × 2</strong> 提供巡航与转向 · <strong style=\"color:var(--light);font-weight:500\">垂直 × 2</strong> 提供升沉与俯仰 · <strong style=\"color:var(--light);font-weight:500\">横向 × 1</strong> 提供平移构图——精确解耦的 5 自由度控制基底。",
    "arch.img.alt": "Project Remo 推进器架构示意 · 2&nbsp;水平 +&nbsp;2&nbsp;垂直 +&nbsp;1&nbsp;横向 · 5 自由度",
    "arch.spec.1": "推进器架构",
    "arch.spec.1.val": "2H + 2V + 1L",
    "arch.spec.2": "动力 A · 无刷",
    "arch.spec.2.val": "策海 T60-edu-se",
    "arch.spec.2.sub": "推力 3 kgf · 功率 150 W",
    "arch.spec.3": "动力 B · 有刷",
    "arch.spec.3.val": "自研双向电调",
    "arch.spec.4": "飞控平台",
    "arch.spec.4.val": "FlyingRC H7Wlite",
    "arch.spec.4.sub": "MCU STM32H743VIH6 · 双 IMU + DPS368",
    "arch.spec.5": "固件",
    "arch.spec.5.val": "ArduSub 4.1.2",
    "arch.spec.6": "无刷电调",
    "arch.spec.6.val": "AM32 Mini ESC",
    "arch.spec.7": "深度传感",
    "arch.spec.7.val": "MS5837-30BA",
    "arch.spec.8": "避障声呐",
    "arch.spec.8.val": "DYP-L08",
    "arch.spec.9": "声学模块",
    "arch.spec.9.val": "DYP-C01B ×3",
    "arch.spec.10": "补光系统",
    "arch.spec.10.val": "12V LED · 环境光平衡",
    "arch.spec.11": "防水开关",
    "arch.spec.11.val": "舱外物理通断",
    "arch.spec.12": "漏水检测",
    "arch.spec.12.val": "I2C 传感器",
    "arch.spec.13": "水压辅助密封",
    "arch.spec.13.val": "自研结构",
    "arch.spec.14": "原型工艺",
    "arch.spec.14.val": "Bambu Lab P1S",

    /* Stats */
    "stats.eyebrow": "<span class=\"index\">05</span> By the Numbers",
    "stats.1.label": "设计目标深潜",
    "stats.1.note": "结构设计目标，当前于泳池 / 浅水验证。",
    "stats.2.label": "推进器架构",
    "stats.2.note": "2&nbsp;水平 +&nbsp;2&nbsp;垂直 +&nbsp;1&nbsp;横向，稳定优先。",
    "stats.3.label": "声学通信模块",
    "stats.3.note": "DYP-C01B，相机端 2 + 手环端 1，纠偏定位。",
    "stats.4.label": "核心专利布局",
    "stats.4.note": "声学辅助视觉、多模态交互、水压辅助密封。",

    /* Acoustic */
    "acoustic.eyebrow": "<span class=\"index\">03</span> Acoustic Intelligence",
    "acoustic.heading": "水变浑，<br class=\"desktop-only\"><em>声学定位</em>不停。",
    "acoustic.title": "水下声学通信模块，非消费级水听器。",
    "acoustic.desc.1": "Remo 系统部署三枚 DYP-C01B 水下声学通信模块——相机端 2 枚、手环端 1 枚。任意两枚入水即可建立低速率声学链路，实现<strong style=\"color:var(--light);font-weight:500\">纠偏定位</strong>。声学定位在气泡、悬浮颗粒等视觉失效场景下保持稳定——这项技术在 ROV 工业领域已成熟应用超过二十年。我们将它缩至掌上尺寸，并与视觉算法进行融合。",
    "acoustic.desc.2": "声学手环通过<strong style=\"color:var(--light);font-weight:500\">敲击</strong>产生超声特征信号，由相机端接收并识别，构成低带宽、高鲁棒的水下指令通道——面向戴面镜、戴手套、无法语音通信的真实潜水环境。",
    "acoustic.badge.1": "DYP-C01B 声学模块 ×3",
    "acoustic.badge.2": "自动巡航 / 避障",
    "acoustic.badge.3": "入水唤醒 / 出水无感回传",
    "acoustic.badge.4": "声学纠偏定位",
    "acoustic.badge.5": "敲击超声指令识别",
    "acoustic.badge.6": "声学-视觉融合",
    "acoustic.badge.7": "震动反馈闭环",
    "acoustic.badge.8": "多机声学组网",
    "acoustic.bracelet": "声学手环 · ESP32-S3 · DYP-C01B · IMU 翻腕+敲击",

    /* Color */
    "color.eyebrow": "<span class=\"index\">04</span> Image Pipeline",
    "color.heading": "不只是<em>拍下来</em>，<br class=\"desktop-only\">而是直接出片。",
    "color.lead": "水下色彩失真不是滤镜能解决的——红光在 5 m 深度衰减殆尽，绿光在 15 m 大幅衰减，白平衡校正有其物理极限。Remo 采用<strong style=\"color:var(--light);font-weight:500\">生成对抗网络（GAN）</strong>进行水下色彩还原，结合 MS5837 深度计与声学距离数据做物理级色彩校正。工程化后将以云端 AI 剪辑订阅形式提供服务——<em style=\"font-style:normal;color:var(--accent)\">HaaS: Hardware as a Service</em>&nbsp;。",
    "color.tag.left": "RAW · 18.6 M · 浑浊",
    "color.tag.right": "GAN RESTORED · v0.4",
    "color.disclaimer": "本图为算法 v0.4 离线推理结果。工程化版本计划于 EP 阶段验证，于 Kickstarter 阶段开放云端服务。",

    /* Compare · v2.2 */
    "compare.eyebrow": "<span class=\"index\">06</span> 对比",
    "compare.heading": "轻量便携，<em>即刻出发</em>&nbsp;。",
    "compare.col.1": "运动相机",
    "compare.col.2": "消费 ROV",
    "compare.row.1.axis": "自由度",
    "compare.row.1.c1": "手持",
    "compare.row.1.c2": "拖线缆",
    "compare.row.1.c3": "自由游动",
    "compare.row.2.axis": "上手时间",
    "compare.row.2.c1": "30 分钟",
    "compare.row.2.c2": "2 小时",
    "compare.row.2.c3": "5 分钟",
    "compare.row.3.axis": "拍摄距离",
    "compare.row.3.c1": "臂展 < 1m",
    "compare.row.3.c2": "线缆长",
    "compare.row.3.c3": "20m 自动跟随",
    "compare.row.4.axis": "价格区间",
    "compare.row.4.c1": "消费级",
    "compare.row.4.c2": "专业 / 工业级",
    "compare.row.4.c3": "消费级旗舰段",
    "compare.row.5.axis": "后期工作量",
    "compare.row.5.c1": "手动调色",
    "compare.row.5.c2": "手动调色",
    "compare.row.5.c3": "AI 自动",
    "compare.row.6.axis": "重量",
    "compare.row.6.c1": "百克级",
    "compare.row.6.c2": "千克级",
    "compare.row.6.c3": "约 1.5 kg（便携）",
    "compare.row.7.axis": "防水深度",
    "compare.row.7.c1": "10–20 m 裸机",
    "compare.row.7.c2": "100 m+",
    "compare.row.7.c3": "40 m",
    "compare.row.8.axis": "续航",
    "compare.row.8.c1": "60–90 min",
    "compare.row.8.c2": "4 hrs",
    "compare.row.8.c3": "60 min",
    "compare.row.9.axis": "自动跟拍",
    "compare.row.9.c1": "无",
    "compare.row.9.c2": "无",
    "compare.row.9.c3": "声学融合",
    "compare.row.10.axis": "适合场景",
    "compare.row.10.c1": "运动 / 极限",
    "compare.row.10.c2": "科研 / 巡检",
    "compare.row.10.c3": "潜水 / 浮潜 / 海岛游",
    "compare.note": "对比基于公开消费产品参数。Remo 数据基于当前工程样机实测与结构设计目标。",

    /* Lineup · v2.2 */
    "lineup.eyebrow": "<span class=\"index\">08</span> 产品线",
    "lineup.heading": "两款机型，<em>各取所需</em>&nbsp;。",
    "lineup.lite.tag": "01 · Lite",
    "lineup.lite.desc": "面向浮潜、自由潜与海岛旅行的主力规划款，把操作复杂度降到最低。",
    "lineup.lite.spec.1": "防水深度",
    "lineup.lite.spec.1.val": "40 m",
    "lineup.lite.spec.2": "影像",
    "lineup.lite.spec.2.val": "4K · 30 fps",
    "lineup.lite.spec.3": "续航",
    "lineup.lite.spec.3.val": "60 min",
    "lineup.lite.spec.4": "能力",
    "lineup.lite.spec.4.val": "自动跟随 + 云端调色",
    "lineup.lite.spec.5": "设计",
    "lineup.lite.spec.5.val": "便携 · 1.5 kg",
    "lineup.lite.cta": "加入等候名单",
    "lineup.pro.tag": "02 · Pro",
    "lineup.pro.desc": "面向进阶创作者的规划款，保留更深潜域、更长续航和高级模式空间。",
    "lineup.pro.spec.1": "防水深度",
    "lineup.pro.spec.1.val": "60 m",
    "lineup.pro.spec.2": "影像",
    "lineup.pro.spec.2.val": "4K · 60 fps HDR",
    "lineup.pro.spec.3": "续航",
    "lineup.pro.spec.3.val": "90 min",
    "lineup.pro.spec.4": "能力",
    "lineup.pro.spec.4.val": "自动跟随 + 云端调色 + 离线高级",
    "lineup.pro.spec.5": "拓展",
    "lineup.pro.spec.5.val": "配件接口（镜头 / 灯组）",
    "lineup.pro.cta": "加入等候名单 / 提交意向",
    "lineup.price.note": "当前产品线为规划方向，最终规格与价格将在 <strong style=\"color:var(--light);font-weight:500\">Kickstarter 发布前</strong> 更新。加入等候名单可优先收到测试招募、发布节奏和早鸟信息。",

    /* Specs · v2 (折叠规格表) */
    "specs.tab.imaging": "影像",
    "specs.tab.underwater": "水下能力",
    "specs.tab.intelligence": "智能算法",
    "specs.tab.powertrain": "动力系统",
    "specs.tab.physical": "物理规格",
    "specs.tab.bracelet": "配套手环",
    "specs.col.item": "项目",
    "specs.col.value": "规格",
    "specs.col.status": "状态",
    /* Imaging · v2 */
    "specs.img.1": "主摄",
    "specs.img.1v": "4K HDR · 1/1.7\" CMOS · 12-bit RAW",
    "specs.img.2": "视场角",
    "specs.img.2v": "水下广角 130° · 防畸变光学",
    "specs.img.3": "补光",
    "specs.img.3v": "12V LED 舱内 · 环境光自动平衡",
    "specs.img.4": "激光对焦",
    "specs.img.4v": "水下激光对焦模块",
    "specs.img.5": "TrueColor Depth",
    "specs.img.5v": "云端 GAN 色彩还原管线",
    /* Underwater · v2 */
    "specs.uw.1": "防水深度",
    "specs.uw.1v": "Lite 40 m / Pro 60 m",
    "specs.uw.2": "机身材料",
    "specs.uw.2v": "PC 透明件 + 工程塑料 · 防腐蚀涂层",
    "specs.uw.3": "推进器布局",
    "specs.uw.3v": "2 水平 + 2 垂直 + 1 横向（5 自由度）",
    "specs.uw.4": "巡航速度",
    "specs.uw.4v": "约 1.5 m/s",
    "specs.uw.5": "密封",
    "specs.uw.5v": "IP68 长效密封 · 海水盐雾通过",
    "specs.uw.6": "漏水检测",
    "specs.uw.6v": "I2C 通用接口漏水传感器",
    /* Intelligence · v2 */
    "specs.int.1": "声学跟随",
    "specs.int.1v": "DYP-C01B · 20 m 直径通信",
    "specs.int.2": "视觉精构图",
    "specs.int.2v": "声学权重 + 视觉算法融合",
    "specs.int.3": "TapCode",
    "specs.int.3v": "敲击超声特征识别",
    "specs.int.4": "避障",
    "specs.int.4v": "DYP-L08 超声波 · 5 cm–8 m",
    "specs.int.5": "入水唤醒",
    "specs.int.5v": "水压 + 导通双判定",
    /* Powertrain · v2 (内置电池 + USB-C 快充，不再提"可拆卸") */
    "specs.pt.1": "电池",
    "specs.pt.1v": "内置高密度锂电池 · 容量 < 100 Wh（可手提登机）",
    "specs.pt.2": "充电",
    "specs.pt.2v": "USB-C 快充 · 约 2 小时回满",
    "specs.pt.3": "推进器",
    "specs.pt.3v": "无刷推进器 ×5 · 海水稳定",
    "specs.pt.4": "飞控",
    "specs.pt.4v": "ArduSub 4.1.2 · 双 IMU",
    /* Physical · v2 */
    "specs.ph.1": "机身重量",
    "specs.ph.1v": "1.5–1.6 kg（实测 · 水中微小正浮力）",
    "specs.ph.2": "便携",
    "specs.ph.2v": "能装背包 · 能上飞机",
    "specs.ph.3": "物理开关",
    "specs.ph.3v": "舱外防水主电源开关",
    /* Bracelet · v2 */
    "specs.br.1": "主控",
    "specs.br.1v": "ESP32-S3-WROOM",
    "specs.br.2": "声学",
    "specs.br.2v": "DYP-C01B · 与相机端组网",
    "specs.br.3": "交互",
    "specs.br.3v": "IMU 翻腕 + TapCode 敲击 · 无物理按键",
    "specs.br.4": "反馈",
    "specs.br.4v": "线性马达震动 · 失锁提醒",
    "specs.br.5": "电池",
    "specs.br.5v": "800 mAh · 内置 · USB-C 快充",

    /* Gallery */
    "gallery.eyebrow": "<span class=\"index\">09</span> Prototype Evidence",
    "gallery.heading": "不停留在概念图。",
    "gallery.shot.1.cap": "2026·04 · 实验室装配",
    "gallery.shot.1.title": "实物原型",
    "gallery.shot.1.desc": "掌上级水下相机 · 推进器结构装配",
    "gallery.shot.2.cap": "ID PROPOSAL · v2.1 · 2026·03",
    "gallery.shot.2.title": "工业设计 ID",
    "gallery.shot.2.desc": "表面语言 · 色彩与体量",
    "gallery.shot.3.cap": "HARDWARE · PCB1 · REV 3 · 2026·03·17",
    "gallery.shot.3.title": "PCB · 主控板",
    "gallery.shot.3.desc": "相机端硬件 · 第 3 轮迭代",
    "gallery.shot.4.cap": "WATCH SCH · 2026·03",
    "gallery.shot.4.title": "原理图 · 声学手环",
    "gallery.shot.4.desc": "水下多模态交互入口",
    "gallery.shot.5.cap": "WATER TEST · 2026·04·28 · NO CUT · 11 段连续记录",
    "gallery.shot.5.title": "场景表达",
    "gallery.shot.5.desc": "自由潜拍 · 面向消费者的产品想象",

    /* Business */
    "business.eyebrow": "<span class=\"index\">10</span> Business Model",
    "business.heading": "硬件获客，<br class=\"desktop-only\"><em>HaaS</em> 创造长期价值。",
    "business.1.title": "消费硬件",
    "business.1.desc": "以无线跟随、掌上起降、一键成片建立差异化优势。不靠堆相机参数竞争，让产品定义与整机体验成为第一层壁垒。",
    "business.2.title": "潜店租赁",
    "business.2.desc": "面向潜店与旅行场景的低门槛入口。对潜店：提高设备周转率与内容产出；对用户：出行前不必购买水下相机。租赁本身是最有效的消费者教育。",
    "business.3.title": "云端&nbsp;AI&nbsp;订阅",
    "business.3.desc": "GAN 色彩还原、智能剪辑、潜水日志、成片模板——所有依赖算力与素材库的功能部署在云端，形成持续订阅收入。硬件 ASP 波动，HaaS 提供稳定的经常性收入。",

    /* Roadmap */
    "roadmap.eyebrow": "<span class=\"index\">11</span> Milestones",
    "roadmap.heading": "三步走，<br class=\"desktop-only\">到达&nbsp;Kickstarter。",
    "roadmap.1.when": "Now · 2026",
    "roadmap.1.title": "POC&nbsp;原理样机",
    "roadmap.1.desc": "声学定位 + 自动巡航 + 避障状态机已跑通；PCB 第 3 轮迭代；正在补齐核心团队。",
    "roadmap.2.when": "Next · 2026&nbsp;Q4",
    "roadmap.2.title": "EP&nbsp;工程验证",
    "roadmap.2.desc": "重点验证稳定跟随、水压辅助密封一致性、可靠起降、续航与可维护性。",
    "roadmap.3.when": "Launch · 2027&nbsp;夏",
    "roadmap.3.title": "Kickstarter&nbsp;爆发",
    "roadmap.3.desc": "用真实水测素材、可量化指标与双产品线叙事启动全球早期用户转化。",

    /* Moat */
    "moat.kicker": "14 · IP &amp; Patent Defense",
    "moat.heading": "专利护城河<em>已落地</em>&nbsp;。",
    "moat.desc": "围绕产品最难复现的技术节点，已向国家知识产权局完成 4 项专利布局：声学+视觉融合定位、GAN 水下色彩还原、双核控制架构、潜水电脑表交互——构成 EP 与 Kickstarter 阶段的核心壁垒。",
    "moat.note": "3 项已受理 · 1 项撰写中 · 申请人 / 发明人 杨文俊",
    "moat.1.title": "声学与视觉融合的水下自动定位拍摄系统及控制方法",
    "moat.1.desc": "发明专利 · 国家知识产权局已受理",
    "moat.2.title": "基于物理环境元数据约束的水下图像生成式色彩还原方法及系统",
    "moat.2.desc": "发明专利 · 国家知识产权局已受理",
    "moat.3.title": "基于视控解耦双核架构的微型水下航行器电子系统",
    "moat.3.desc": "实用新型专利 · 国家知识产权局已受理",
    "moat.4.title": "集成轻量化水声模组及震动反馈机制的潜水电脑表",
    "moat.4.desc": "实用新型专利 · 撰写中",

    /* Founding Team */
    "team.eyebrow": "<span class=\"index\">12</span> Founding Team",
    "team.heading": "国家级冠军团队，<br class=\"desktop-only\">从<em>赛场</em>走向<em>产品</em>&nbsp;。",
    "team.lead": "Remo 的核心团队来自 <strong style=\"color:var(--light);font-weight:500\">北京信息科技大学 G_Robot 水下机器人社团</strong>——一支同时拿过 <em style=\"font-style:normal;color:var(--accent)\">\"挑战杯\"全国大学生课外学术科技作品竞赛一等奖</em>与 <em style=\"font-style:normal;color:var(--accent)\">RoboCup 中国赛水下机器人冠军</em>的水下机器人专项团队。竞赛舞台上反复验证过的工程能力，正是 Project Remo 的底座。",
    "team.founder.role": "创始人 · 项目负责人 · 技术总监",
    "team.founder.title": "北京信息科技大学 · 自动化（卓越工程师计划）<br>G_Robot 社团社长 · ROV / ARV 整机研发",
    "team.stack.1.k": "软件",
    "team.stack.2.k": "硬件",
    "team.stack.3.k": "机械",
    "team.stack.4.k": "学术",
    "team.award.1.title": "第十九届\"挑战杯\"全国大学生课外学术科技作品竞赛 · 人工智能+应用赛",
    "team.award.1.desc": "国家级一等奖 · \"深智鲨\"——基于嵌入式 AI 的小型无人潜航器自主控制系统设计 / 项目负责人 · 技术总监 · 路演主讲",
    "team.award.1.tag": "国家级一等奖",
    "team.award.2.title": "中国机器人大赛暨 RoboCup 机器人世界杯中国赛 · 水下机器人专项赛",
    "team.award.2.desc": "国家级一等奖（冠军）· 水中作业项目 / 同期总决赛 国家级一等奖（亚军）+ 水中巡游 国家级二等奖",
    "team.award.2.tag": "冠军",
    "team.award.3.title": "第十七届国际先进机器人及仿真技术大赛 · 智慧海洋赛道",
    "team.award.3.desc": "水下作业赛 国家级一等奖（冠军）· 水下目标抓取赛 国家级一等奖（冠军）· 水下对抗赛 国家级一等奖",
    "team.award.3.tag": "3 × 国家级一等",
    "team.award.4.title": "\"挑战杯\"首都大学生课外学术科技作品竞赛 · \"青聚 AI\"人工智能+应用赛",
    "team.award.4.desc": "省级特等奖 ×2 项",
    "team.award.4.tag": "省级特等",
    "team.award.5.title": "中国国际海洋水下机器人大赛 · 第六届国际海洋工程装备科技创新大赛",
    "team.award.5.desc": "ROV 赛道 国家级二等奖 · AUV 赛道 国家级二等奖",
    "team.award.5.tag": "国家级二等",
    "team.note": "这些奖项背后是同一支班底——从声学、视觉、控制、结构到嵌入式 AI 的<em style=\"font-style:normal;color:var(--accent)\">完整水下机器人工程能力</em>&nbsp;。Project Remo 是这支团队把赛场上反复打磨过的技术栈，工程化为消费级产品的第一站。",

    /* Investors */
    "investors.eyebrow": "<span class=\"index\">14</span> For Investors",
    "investors.heading": "已验证的，<br class=\"desktop-only\"><em>分层呈现</em>&nbsp;。",
    "investors.lead": "我们对外仅承诺已通过实测验证的能力，路线图项目以\"进行中 / 规划中\"清晰标注。以下为面向天使轮投资人的关键信息。完整 Deck 与 Tech Snapshot 请联系创始团队。",
    "investors.1.num": "— 01 · 阶段",
    "investors.1.title": "POC · 原理样机已跑通",
    "investors.1.desc": "机械、PCB、控制脚本、用户访谈、水测视频均已沉淀。可演示链路：入水自动解锁 → 自动巡航 → 近障避让 → 出水无感回传 → 云端色彩还原。",
    "investors.2.num": "— 02 · 即将",
    "investors.2.title": "2026&nbsp;Q4 进入 EP · 工程验证",
    "investors.2.desc": "聚焦稳定跟随闭环、水压辅助密封一致性、连续运行可靠性、续航与可维护性。每一项都有可量化的目标指标。",
    "investors.3.num": "— 03 · 用途",
    "investors.3.title": "天使轮资金分配",
    "investors.3.desc": "核心团队补位（嵌入式 / 控制算法 / 结构）、EP 阶段供应链与小批量水测、Kickstarter 视频与传播。每一笔资金对应一个可验证的里程碑。",
    "investors.btn.1": "索取 Tech Snapshot",
    "investors.btn.2": "查看 90&nbsp;秒实证素材",

    /* Community Feedback */
    "community.eyebrow": "<span class=\"index\">13</span> Community Feedback",
    "community.heading": "你的想法，<br class=\"desktop-only\"><em>塑造产品</em>&nbsp;。",
    "community.lead": "POC 阶段我们欢迎所有反馈 —— 无论是功能需求、使用场景还是技术疑问。审核通过的反馈会展示在这里，并直接影响 EP 阶段的设计决策。",
    "community.btn.submit": "提交你的想法",
    "community.btn.view": "查看所有反馈",
    "community.loading": "正在加载社区反馈...",
    "community.note": "反馈通过 GitHub Issues 管理，无需注册账号即可提交。我们会在 48 小时内审核并回复。",

    /* Outro */
    "outro.heading": "放开双手，<br class=\"desktop-only\"><em>把镜头交给 Remo</em>&nbsp;。",
    "outro.btn.1": "与创始团队对话",
    "outro.btn.2": "回到顶部",
    "outro.meta.1.label": "阶段",
    "outro.meta.1.val": "POC · 原理样机",
    "outro.meta.2.label": "下一站",
    "outro.meta.2.val": "EP · 工程验证 · 2026&nbsp;Q4",
    "outro.meta.3.label": "面市",
    "outro.meta.3.val": "Lite · 2027&nbsp;夏",

    /* Sticky */
    "sticky.specs": "5 推进器 · 声学纠偏定位 · 巡航 40–60&nbsp;min · 4K 海思",
    "sticky.cta": "联系创始团队",

    /* Footer */
    "footer.tagline": "Wireless Underwater Follow-Cam · POC 2026",
    "footer.copyright": "© Project Remo · All rights reserved",

    /* Misc · v2 */
    "meta.title": "Project Remo — 你的水下副驾驶",
    "meta.desc": "Project Remo · 全球首款消费级水下自动跟拍相机。扣在身上，下水即拍，自动跟随，出水即得 4K 成片。2028 Kickstarter 启动。",
    "hero.product.alt": "Project Remo 水下自动跟拍相机",
    "compare.img.alt": "对比：运动相机 · 消费 ROV · Project Remo",
    "bracelet.img.alt": "Project Remo 声学手环",
  },

  /* ─── ENGLISH ─────────────────────────────────────────────────────── */
  en: {
    /* Nav · v2 */
    "nav.why": "Why Remo",
    "nav.hydrolock": "HydroLock",
    "nav.truecolor": "TrueColor",
    "nav.compare": "Compare",
    "nav.scenario": "Use Cases",
    "nav.lineup": "Lineup",
    "nav.faq": "FAQ",
    "nav.investors.pill": "For Investors <span class=\"arrow\">→</span>",

    /* Hero · v2.1 EN (DJI Neo 2 style) */
    "hero.eyebrow": "Underwater Follow-Cam · For diving, snorkeling, and island travel",
    "hero.meta.timeline": "POC formed · Kickstarter target 2028",
    "hero.title": "<span class=\"word\">Your</span><span class=\"word\"><em>Underwater</em></span><span class=\"word\"><em>Cameraman</em>&nbsp;.</span>",
    "hero.summary": "<strong style=\"color:var(--light);font-weight:500\">Acoustic follow, cloud-ready color.</strong> Remo brings underwater following, framing, and post-dive output into one portable device, so the diver can focus on the dive.",
    "hero.btn.primary": "Join the Waitlist",
    "hero.btn.secondary": "Watch Demo",
    "hero.ks.1.note": "Depth Rating",
    "hero.ks.2.note": "Image Spec",
    "hero.ks.3.note": "Endurance",
    "hero.ks.4.note": "Acoustic Follow",
    "hero.ks.5.note": "Lightweight",
    "hero.scroll": "Scroll Down",
    "hero.trust.1.k": "Current stage",
    "hero.trust.1.v": "POC engineering prototype",
    "hero.trust.1.p": "Powertrain, acoustic link, and cloud color pipeline are under validation.",
    "hero.trust.2.k": "Next step",
    "hero.trust.2.v": "User validation + EP",
    "hero.trust.2.p": "Use waitlist and interviews to validate real scenarios before the next engineering prototype.",
    "hero.trust.3.k": "Launch rhythm",
    "hero.trust.3.v": "Kickstarter target 2028",
    "hero.trust.3.p": "Final specs, pricing, and delivery timing will follow the launch version.",

    /* Showcase · v2 */
    "showcase.meta": "REAL FOOTAGE · REAL REEF",
    "showcase.title": "Wireless.<br><em>Free</em>&nbsp;.",

    /* Section 3 · Why Remo · v2 */
    "why.eyebrow": "<span class=\"index\">01</span> Why Remo",
    "why.heading": "Underwater filming<br><em>shouldn't be this hard</em>&nbsp;.",
    "why.lead": "Neither a handheld action camera nor a tethered ROV, Remo reframes consumer underwater filming.",
    "why.1.title": "Hands Free",
    "why.1.copy": "Dive, don't film.",
    "why.2.title": "No Cables",
    "why.2.copy": "It goes where you go.",
    "why.3.title": "Surface-Ready Footage",
    "why.3.copy": "Cloud AI targets share-ready underwater color without manual editing.",

    /* Section 4 · HydroLock · v2 */
    "hydrolock.eyebrow": "<span class=\"index\">02</span> Core Feature · 01",
    "hydrolock.heading": "HydroLock · <em>Acoustic Auto-Follow</em>&nbsp;.",
    "hydrolock.tech": "HydroLock · Dual-source positioning",
    "hydrolock.img.alt": "Acoustic link underwater scene · 20m diameter communication range",
    "hydrolock.desc.1": "A micro-acoustic module continuously locks onto the <strong style=\"color:var(--light);font-weight:500\">dive bracelet</strong> you're wearing. Combined with visual tracking, the camera flies itself to the best framing.",
    "hydrolock.desc.2": "You focus on the dive. It handles framing, motion, and follow.",
    "hydrolock.badge.1": "20m Acoustic Diameter",
    "hydrolock.badge.2": "Acoustic + Visual Fusion",
    "hydrolock.badge.3": "Turbidity Penetrating",
    "hydrolock.badge.4": "30 fps Tracking",
    "hydrolock.badge.5": "Auto-Framing",
    "hydrolock.badge.6": "Obstacle Aware",
    "hydrolock.badge.7": "Lost-Lock Return",
    "hydrolock.badge.8": "TapCode Wake",
    "hydrolock.bracelet": "Acoustic bracelet · worn on wrist, located continuously underwater",

    /* Section 4 · Remo Beacon · v2 */
    "beacon.tag": "Companion device",
    "beacon.sub": "Acoustic bracelet · your underwater GPS beacon",
    "beacon.img.alt": "Remo Beacon acoustic bracelet",
    "beacon.point.1.k": "Continuous broadcast",
    "beacon.point.1.v": "Sends acoustic positioning signals underwater for the camera to receive in real time",
    "beacon.point.2.k": "Tap interaction",
    "beacon.point.2.v": "Tap the bracelet to send ultrasonic command patterns, even with dive gloves",
    "beacon.point.3.k": "Haptic feedback",
    "beacon.point.3.v": "Camera status, lost-lock alerts, and return prompts are sent back through vibration",
    "beacon.point.4.k": "Flexible wear",
    "beacon.point.4.v": "Silicone strap, replaceable band, or clipped to a BCD or weight belt",

    /* Section 5 · TrueColor Depth · v2 */
    "truecolor.eyebrow": "<span class=\"index\">03</span> Core Feature · 02",
    "truecolor.heading": "TrueColor Depth · <br><em>One-Tap 4K Editorial Color</em>&nbsp;.",
    "truecolor.tech": "TrueColor Depth · Depth-aware AI restoration",
    "truecolor.lead": "Below 10 meters, common camera footage turns blue-green. Remo uploads depth, water, and light metadata to the cloud, where AI estimates the intended colors and targets a share-ready result in a short processing window.",
    "truecolor.tag.left": "Untouched RAW",
    "truecolor.tag.right": "TrueColor Depth",
    "truecolor.caption": "←  Drag to compare  →  ·  Processing time subject to launch version",

    /* Section 6 · TapCode · v2 */
    "tapcode.eyebrow": "<span class=\"index\">04</span> Core Feature · 03",
    "tapcode.heading": "TapCode · <em>Tap to command</em>&nbsp;.",
    "tapcode.tech": "TapCode · Underwater acoustic command recognition",
    "tapcode.1.label": "Tap 1",
    "tapcode.1.action": "Power / Wake",
    "tapcode.2.label": "Tap 2",
    "tapcode.2.action": "Photo",
    "tapcode.3.label": "Hold",
    "tapcode.3.action": "Start recording",
    "tapcode.4.label": "Tap 3",
    "tapcode.4.action": "Start auto-follow",
    "tapcode.foot": "Wearing 5 mm dive gloves? Can't see the screen at 30 m?<br><strong style=\"color:var(--light);font-weight:500\">Remo listens to taps — no buttons needed.</strong>",

    /* Section 7 · CloudSync · v2 */
    "cloudsync.eyebrow": "<span class=\"index\">05</span> Core Feature · 04",
    "cloudsync.heading": "CloudSync · <em>Footage ready on shore</em>&nbsp;.",
    "cloudsync.tech": "CloudSync · Cloud pipeline + app delivery",
    "cloudsync.step.1": "Remo surfaces",
    "cloudsync.step.2": "Auto-connects 5G / Wi-Fi",
    "cloudsync.step.3": "Footage + metadata → cloud",
    "cloudsync.step.4": "TrueColor Depth processing",
    "cloudsync.step.5": "App push when processing completes",
    "cloudsync.app.title": "Remo · My Footage",
    "cloudsync.app.tab.1": "Edits",
    "cloudsync.app.tab.2": "Raw",
    "cloudsync.app.tab.3": "Templates",
    "cloudsync.app.fresh.label": "TrueColor Ready",
    "cloudsync.app.fresh.time": "2 min ago · 4K · 03:42",
    "cloudsync.app.fresh.badge": "NEW",
    "cloudsync.app.action.1": "▶ Play",
    "cloudsync.app.action.2": "↗ Share",
    "cloudsync.app.action.3": "⤓ Save",
    "cloudsync.app.label.recent": "Recent footage",
    "cloudsync.app.old.label": "Yesterday · Reef Snorkel",
    "cloudsync.app.old.time": "12 clips · Auto-edited",
    "cloudsync.app.older.label": "Moalboal · Day 2",
    "cloudsync.app.older.time": "4K · 8 clips stitched",
    "cloudsync.app.bottom.1": "Library",
    "cloudsync.app.bottom.2": "Edit",
    "cloudsync.app.bottom.3": "Device",
    "cloudsync.app.caption": "App concept render · Actual UI subject to launch version",
    "cloudsync.foot": "No card pulling. No transferring. No color grading.<br><strong style=\"color:var(--light);font-weight:500\">Surface, sip some water, your shot's on your phone.</strong>",

    /* Section 9 · Scenario · v2 */
    "scenario.eyebrow": "<span class=\"index\">07</span> Who's it for",
    "scenario.heading": "Your <em>next dive</em><br>shouldn't be without it.",
    "scenario.1.tag": "Dive Enthusiasts",
    "scenario.1.copy": "Capture every dive. Never regret not having a buddy to film you.",
    "scenario.1.img.alt": "Remo follows a scuba diver for hands-free third-person underwater footage",
    "scenario.2.tag": "Island Travelers",
    "scenario.2.copy": "Snorkel like a creator. No gear to buy, no shooting to learn.",
    "scenario.2.img.alt": "Remo follows an island snorkeler in clear shallow water",
    "scenario.3.tag": "Content Creators",
    "scenario.3.copy": "Solo underwater Vlogs. No partner, no DP.",
    "scenario.3.img.alt": "Remo captures a solo underwater creator from a third-person angle",
    "scenario.4.tag": "Dive Instructors",
    "scenario.4.copy": "The best teaching angle for student review. See yourself in third person.",
    "scenario.4.img.alt": "Remo records a dive instructor and student for training review",
    "scenario.note": "Scene images illustrate target use cases. Launch pages will be updated with real underwater footage and production samples.",

    /* Section 11 · FAQ · v2 */
    "faq.eyebrow": "<span class=\"index\">09</span> Questions",
    "faq.heading": "Still have <em>questions</em>?",
    "faq.1.q": "Will it really work in seawater?",
    "faq.1.a": "Remo is designed around saltwater use, with IP68, corrosion, and long-term sealing targets. Final validation results will be published before mass production. Fresh-water rinsing after each dive is still recommended.",
    "faq.2.q": "Is 60 min endurance enough?",
    "faq.2.a": "A standard scuba tank lasts 45–60 min — Remo matches that. USB-C fast charge gives a full tank in about 2 hours. Power users can carry a second unit as a backup.",
    "faq.3.q": "What if I lose it?",
    "faq.3.a": "The current plan targets a 20 m diameter acoustic follow range. Loss alerts, auto-surfacing, and location assistance are part of the safety roadmap and will be finalized after real-water validation.",
    "faq.4.q": "Can I fly with it?",
    "faq.4.a": "Internal lithium battery < 100 Wh — meets international airline carry-on rules. Take the unit on board, no check-in needed.",
    "faq.5.q": "Isn't 40 m too shallow vs ROVs?",
    "faq.5.a": "95% of consumer dive activity happens within 30 m (recreational dive / snorkel / island travel). Lite 40 m / Pro 60 m covers all leisure and sport diving. 100 m+ is for cave and commercial diving — not Remo's positioning.",
    "faq.6.q": "When will it ship?",
    "faq.6.a": "The current target is a Q4 2028 Kickstarter launch. Shipping depends on EP, PVT, and small-batch validation. Join the waitlist for direct updates.",
    "faq.7.q": "Repair and warranty?",
    "faq.7.a": "Repair and warranty terms will be announced before Kickstarter. The current design uses an internal battery, and service planning will cover sealing maintenance, battery aging, and authorized repair paths.",
    "faq.8.q": "How do international buyers order?",
    "faq.8.a": "Kickstarter ships globally. Post-launch we'll progressively go live on Amazon US / EU / JP. DTC web store country coverage will be announced.",
    "faq.final.title": "Ready to <em>dive in</em>?",
    "faq.final.cta.primary": "Join the Waitlist",
    "faq.final.cta.investors": "For Investors",
    "faq.final.foot": "The waitlist is for product validation, interview recruiting, and launch updates. It is not an immediate sales commitment.",
    "waitlist.note.1": "Tell us your use case",
    "waitlist.note.2": "Get Beta / interview priority",
    "waitlist.note.3": "Receive Kickstarter launch updates",

    /* Footer · v2 */
    "footer.copyright": "© 2026 Project Remo · All rights reserved",
    "footer.nav.product": "Product",
    "footer.nav.lineup": "Accessories",
    "footer.nav.support": "Support",
    "footer.nav.contact": "Contact",
    "footer.ir.link": "For Investors <span class=\"arrow\">→</span>",
    "footer.ir.email": "ir@projectremo · Email us",

    /* Specs · v2 */
    "specs.toggle": "View Full Spec Sheet",

    "manifesto.eyebrow": "<span class=\"index\">01</span> Manifesto",
    "manifesto.text": "The real bottleneck in underwater photography<br>isn't the gear —<br>it's that the diver's attention<br><em>is already split across too many tasks</em>&nbsp;.",
    "manifesto.sig": "Project Remo · Founding Team",

    "features.eyebrow": "<span class=\"index\">01</span> Features",
    "features.heading": "Three core technologies<br class=\"desktop-only\">that define <em>underwater follow-cam</em>&nbsp;.",
    "features.1.eyebrow": "01 / HydroLock",
    "features.1.title": "Acoustic Lock & Track",
    "features.1.desc": "Three DYP-C01B acoustic modules form a positioning mesh. Stable tracking through bubbles, turbidity, and low visibility — no vision required.",
    "features.1.cta": "Explore Acoustics →",
    "features.2.eyebrow": "02 / TrueColor Depth",
    "features.2.title": "Depth-Aware Color Restoration",
    "features.2.desc": "GAN algorithm fused with MS5837 depth data. One-tap natural color recovery for scenes where red and green wavelengths have heavily attenuated.",
    "features.2.cta": "Explore Imaging →",
    "features.3.eyebrow": "03 / CloudSync",
    "features.3.title": "Auto-Sync on Surfacing, Restored in the Cloud",
    "features.3.desc": "On surfacing, the unit pairs with the companion mobile app and uploads raw footage in the background. A cloud deep-learning model restores underwater color automatically; users retrieve a finished result directly from the app.",
    "features.3.cta": "Explore Workflow →",

    "pain.eyebrow": "<span class=\"index\">02</span> The Pain",
    "pain.heading": "When you dive with a camera, <em style=\"font-style:italic;color:var(--accent)\">both hands and attention</em> are tied up.",
    "pain.1.title": "Both Hands Occupied",
    "pain.1.desc": "A diver underwater manages buoyancy, breathing, depth, composition, and focus — five tasks competing for one attention budget. The outcome is rarely \"didn't get the shot.\" <em style=\"font-style:normal;color:var(--accent)\">It's \"got the shot but it's unusable, and safety margins are shrinking.\"</em>",
    "pain.2.title": "ROVs Aren't for Consumers",
    "pain.2.desc": "Traditional ROVs are built for industrial inspection — tethers, ground control stations, shore-deployment workflows. They were never designed for recreational diving. At 7–15 kg and ¥15,000+ entry price, \"consumer-grade\" has never described this category.",
    "pain.3.title": "Vision Fails Underwater",
    "pain.3.desc": "Bubbles, suspended particles, backlight, low visibility — any one of these breaks a pure visual tracking system. Underwater positioning must be designed for the physics of water, <em style=\"font-style:normal;color:var(--accent)\">not adapted from land-based vision assumptions</em>&nbsp;.",

    "flow.eyebrow": "<span class=\"index\">02</span> How It Works",
    "flow.heading": "60 seconds<br class=\"desktop-only\">to understand an <em>underwater follow-shot</em>&nbsp;.",
    "flow.1.title": "Auto-Wake on Entry",
    "flow.1.desc": "The device unlocks the moment it enters the water. No buttons needed. Dual water-pressure and conductivity detection prevents false triggers.",
    "flow.2.title": "Acoustic Diver Lock",
    "flow.2.desc": "The diver's acoustic bracelet establishes an acoustic link via DYP-C01B, allowing Remo to maintain stable positioning even in murky water.",
    "flow.3.title": "Intelligent Follow-Framing",
    "flow.3.desc": "Acoustic positioning provides positional priors; visual tracking handles fine composition. When vision drops, acoustic weighting takes over instantly.",
    "flow.4.title": "Seamless Post-Dive Upload",
    "flow.4.desc": "On surfacing, the unit pairs with the companion mobile app and uploads raw footage in the background. A cloud deep-learning model automatically restores underwater color; users retrieve the processed result directly within the app.",

    "arch.eyebrow": "<span class=\"index\">06</span> Hardware Architecture",
    "arch.heading": "Not chasing vectored thrust. <em>Chasing</em> stability.",
    "arch.title": "2&nbsp;Horizontal +&nbsp;2&nbsp;Vertical +&nbsp;1&nbsp;Lateral.",
    "arch.desc": "Remo uses a fixed 5-thruster layout (2H + 2V + 1L), avoiding the tuning complexity of vectored thrust in favor of an ROV-industry-validated approach — simpler hydrodynamic modeling, easier controller convergence, lower packaging complexity. Two powertrain routes are being validated in parallel: Cehai Technology brushless thrusters for seawater reliability, and an in-house brushed solution for cost control. Both share the same flight controller, acoustics, and sensor platform.",
    "arch.pillars": "<strong style=\"color:var(--light);font-weight:500\">2 horizontal</strong> for cruise &amp; yaw · <strong style=\"color:var(--light);font-weight:500\">2 vertical</strong> for heave &amp; pitch · <strong style=\"color:var(--light);font-weight:500\">1 lateral</strong> for sway framing — a cleanly decoupled 5-DoF control basis.",
    "arch.img.alt": "Project Remo thruster layout · 2 horizontal + 2 vertical + 1 lateral · 5 degrees of freedom",
    "arch.spec.1": "Thruster Layout",
    "arch.spec.1.val": "2H + 2V + 1L",
    "arch.spec.2": "Route A · Brushless",
    "arch.spec.2.val": "Cehai T60-edu-se",
    "arch.spec.2.sub": "Thrust 3 kgf · Power 150 W",
    "arch.spec.3": "Route B · Brushed",
    "arch.spec.3.val": "In-House Bi-Dir ESC",
    "arch.spec.4": "Flight Controller",
    "arch.spec.4.val": "FlyingRC H7Wlite",
    "arch.spec.4.sub": "MCU STM32H743VIH6 · Dual IMU + DPS368",
    "arch.spec.5": "Firmware",
    "arch.spec.5.val": "ArduSub 4.1.2",
    "arch.spec.6": "BLDC ESC",
    "arch.spec.6.val": "AM32 Mini ESC",
    "arch.spec.7": "Depth Sensor",
    "arch.spec.7.val": "MS5837-30BA",
    "arch.spec.8": "Obstacle Sonar",
    "arch.spec.8.val": "DYP-L08",
    "arch.spec.9": "Acoustic Module",
    "arch.spec.9.val": "DYP-C01B ×3",
    "arch.spec.10": "Fill Light",
    "arch.spec.10.val": "12V LED · Ambient-Light Balanced",
    "arch.spec.11": "Waterproof Switch",
    "arch.spec.11.val": "External Physical Cutoff",
    "arch.spec.12": "Leak Detection",
    "arch.spec.12.val": "I2C Sensor",
    "arch.spec.13": "Hydrostatic Seal",
    "arch.spec.13.val": "In-House Structure",
    "arch.spec.14": "Prototyping",
    "arch.spec.14.val": "Bambu Lab P1S",

    "stats.eyebrow": "<span class=\"index\">05</span> By the Numbers",
    "stats.1.label": "Target Depth Rating",
    "stats.1.note": "Structural design target. Currently validated in pool / shallow water only.",
    "stats.2.label": "Thruster Layout",
    "stats.2.note": "2 horizontal + 2 vertical + 1 lateral. Stability-first philosophy.",
    "stats.3.label": "Acoustic Comms Modules",
    "stats.3.note": "DYP-C01B ×3: 2 on camera + 1 on bracelet. Relative-position correction.",
    "stats.4.label": "Core Patent Portfolio",
    "stats.4.note": "Acoustic-assisted vision, multimodal interaction, hydrostatic seal.",

    "acoustic.eyebrow": "<span class=\"index\">03</span> Acoustic Intelligence",
    "acoustic.heading": "When visibility drops,<br class=\"desktop-only\"><em>acoustic positioning</em> holds.",
    "acoustic.title": "Underwater acoustic communication — not a consumer-grade hydrophone.",
    "acoustic.desc.1": "Remo deploys three DYP-C01B underwater acoustic communication modules — two on the camera, one on the bracelet. Any two submerged modules establish a low-rate acoustic link for <strong style=\"color:var(--light);font-weight:500\">corrective positioning</strong>. The acoustic link remains stable when vision fails due to bubbles or suspended particles — technology proven over two decades in the ROV industry, now shrunk to palm size and fused with vision algorithms.",
    "acoustic.desc.2": "The acoustic bracelet generates ultrasonic signatures via <strong style=\"color:var(--light);font-weight:500\">tapping</strong>, received and decoded by the camera — a low-bandwidth, high-robustness underwater command channel designed for real dive conditions: mask on, gloves on, no voice comms.",
    "acoustic.badge.1": "DYP-C01B Module ×3",
    "acoustic.badge.2": "Auto-Cruise / Obstacle Avoid",
    "acoustic.badge.3": "Immersion Wake / Seamless Upload",
    "acoustic.badge.4": "Acoustic Correction Positioning",
    "acoustic.badge.5": "Tap Ultrasonic Recognition",
    "acoustic.badge.6": "Acoustic-Visual Fusion",
    "acoustic.badge.7": "Haptic Feedback Loop",
    "acoustic.badge.8": "Multi-Unit Acoustic Mesh",
    "acoustic.bracelet": "Acoustic Bracelet · ESP32-S3 · DYP-C01B · IMU Gesture + Tap",

    "color.eyebrow": "<span class=\"index\">04</span> Image Pipeline",
    "color.heading": "Not just <em>recording</em> — delivering a finished shot.",
    "color.lead": "Underwater color distortion can't be fixed with filters — red light is effectively gone at 5 m, green heavily attenuated at 15 m, and white balance has physical limits. Remo uses a <strong style=\"color:var(--light);font-weight:500\">Generative Adversarial Network (GAN)</strong> for underwater color restoration, combining MS5837 depth sensor and acoustic distance data for physics-level correction. The engineered version will ship as a cloud AI editing subscription — <em style=\"font-style:normal;color:var(--accent)\">HaaS: Hardware as a Service</em>&nbsp;.",
    "color.tag.left": "RAW · 18.6 M · Murky",
    "color.tag.right": "GAN RESTORED · v0.4",
    "color.disclaimer": "This image is an offline inference result from algorithm v0.4. The engineered version is planned for EP-stage validation and cloud service launch at Kickstarter.",

    /* Compare · v2 EN */
    "compare.eyebrow": "<span class=\"index\">06</span> Compare",
    "compare.heading": "Your <em>real options</em>&nbsp;.",
    "compare.col.1": "Action Cam",
    "compare.col.2": "Consumer ROV",
    "compare.row.1.axis": "Freedom",
    "compare.row.1.c1": "Handheld",
    "compare.row.1.c2": "Tethered",
    "compare.row.1.c3": "Free Swim",
    "compare.row.2.axis": "Onboarding",
    "compare.row.2.c1": "30 min",
    "compare.row.2.c2": "2 h",
    "compare.row.2.c3": "5 min",
    "compare.row.3.axis": "Shot Distance",
    "compare.row.3.c1": "Arm's reach (< 1m)",
    "compare.row.3.c2": "Cable length",
    "compare.row.3.c3": "20m auto-follow",
    "compare.row.4.axis": "Price Range",
    "compare.row.4.c1": "Consumer",
    "compare.row.4.c2": "Pro / Industrial",
    "compare.row.4.c3": "Consumer Flagship",
    "compare.row.5.axis": "Post Work",
    "compare.row.5.c1": "Manual Grading",
    "compare.row.5.c2": "Manual Grading",
    "compare.row.5.c3": "AI Automated",
    "compare.row.6.axis": "Weight",
    "compare.row.6.c1": "Grams",
    "compare.row.6.c2": "Kilograms",
    "compare.row.6.c3": "~ 1.5 kg (Portable)",
    "compare.row.7.axis": "Water Resistance",
    "compare.row.7.c1": "10–20 m bare",
    "compare.row.7.c2": "100 m+",
    "compare.row.7.c3": "40 m",
    "compare.row.8.axis": "Endurance",
    "compare.row.8.c1": "60–90 min",
    "compare.row.8.c2": "4 hrs",
    "compare.row.8.c3": "60 min",
    "compare.row.9.axis": "Auto-Follow",
    "compare.row.9.c1": "None",
    "compare.row.9.c2": "None",
    "compare.row.9.c3": "Acoustic Fusion",
    "compare.row.10.axis": "Best For",
    "compare.row.10.c1": "Sports / Extreme",
    "compare.row.10.c2": "Research / Inspection",
    "compare.row.10.c3": "Diving / Snorkel / Island Travel",
    "compare.note": "Comparison based on publicly available consumer product specs. Remo figures based on current engineering prototype measurements and structural design targets.",

    /* Lineup · v2 EN (no explicit pricing, no removable battery) */
    "lineup.eyebrow": "<span class=\"index\">08</span> Lineup",
    "lineup.heading": "Two models, <br><em>pick by depth</em>&nbsp;.",
    "lineup.lite.tag": "01 · Lite",
    "lineup.lite.desc": "The planned mainline model for snorkeling, freediving, and island travel, focused on minimum operational complexity.",
    "lineup.lite.spec.1": "Depth Rating",
    "lineup.lite.spec.1.val": "40 m",
    "lineup.lite.spec.2": "Imaging",
    "lineup.lite.spec.2.val": "4K · 30 fps",
    "lineup.lite.spec.3": "Endurance",
    "lineup.lite.spec.3.val": "60 min",
    "lineup.lite.spec.4": "Capability",
    "lineup.lite.spec.4.val": "Auto-follow + cloud color",
    "lineup.lite.spec.5": "Form",
    "lineup.lite.spec.5.val": "Portable · 1.5 kg",
    "lineup.lite.cta": "Join the Waitlist",
    "lineup.pro.tag": "02 · Pro",
    "lineup.pro.desc": "A planned creator-focused model, leaving room for deeper rating, longer endurance, and advanced modes.",
    "lineup.pro.spec.1": "Depth Rating",
    "lineup.pro.spec.1.val": "60 m",
    "lineup.pro.spec.2": "Imaging",
    "lineup.pro.spec.2.val": "4K · 60 fps HDR",
    "lineup.pro.spec.3": "Endurance",
    "lineup.pro.spec.3.val": "90 min",
    "lineup.pro.spec.4": "Capability",
    "lineup.pro.spec.4.val": "Auto-follow + cloud color + offline pro",
    "lineup.pro.spec.5": "Accessories",
    "lineup.pro.spec.5.val": "Lens / Light expansion ports",
    "lineup.pro.cta": "Join the Waitlist / Express Interest",
    "lineup.price.note": "This lineup is a planning direction. Final specs and pricing will be updated <strong style=\"color:var(--light);font-weight:500\">before Kickstarter</strong>. Join the waitlist for testing invites, launch updates, and early-bird notices.",

    /* Specs · v2 EN */
    "specs.tab.imaging": "Imaging",
    "specs.tab.underwater": "Underwater",
    "specs.tab.intelligence": "Intelligence",
    "specs.tab.powertrain": "Powertrain",
    "specs.tab.physical": "Physical",
    "specs.tab.bracelet": "Bracelet",
    "specs.col.item": "Item",
    "specs.col.value": "Spec",
    "specs.col.status": "Status",
    "specs.img.1": "Main Sensor",
    "specs.img.1v": "4K HDR · 1/1.7\" CMOS · 12-bit RAW",
    "specs.img.2": "Field of View",
    "specs.img.2v": "Underwater wide 130° · distortion-corrected optics",
    "specs.img.3": "Lighting",
    "specs.img.3v": "12V LED in-housing · ambient-light auto balance",
    "specs.img.4": "Laser AF",
    "specs.img.4v": "Underwater laser autofocus module",
    "specs.img.5": "TrueColor Depth",
    "specs.img.5v": "Cloud GAN color restoration pipeline",
    /* Underwater · v2 EN */
    "specs.uw.1": "Depth Rating",
    "specs.uw.1v": "Lite 40 m / Pro 60 m",
    "specs.uw.2": "Body Material",
    "specs.uw.2v": "PC transparent + engineering plastic · anti-corrosion coated",
    "specs.uw.3": "Thruster Layout",
    "specs.uw.3v": "2 horizontal + 2 vertical + 1 lateral (5 DoF)",
    "specs.uw.4": "Cruise Speed",
    "specs.uw.4v": "~1.5 m/s",
    "specs.uw.5": "Sealing",
    "specs.uw.5v": "IP68 long-term seal · saltwater spray verified",
    "specs.uw.6": "Leak Detection",
    "specs.uw.6v": "I2C general-purpose leak sensor",
    /* Intelligence · v2 EN */
    "specs.int.1": "Acoustic Follow",
    "specs.int.1v": "DYP-C01B · 20 m diameter link",
    "specs.int.2": "Visual Framing",
    "specs.int.2v": "Acoustic weight + visual algorithm fusion",
    "specs.int.3": "TapCode",
    "specs.int.3v": "Tap ultrasonic signature recognition",
    "specs.int.4": "Obstacle Avoid",
    "specs.int.4v": "DYP-L08 ultrasonic · 5 cm–8 m",
    "specs.int.5": "Immersion Wake",
    "specs.int.5v": "Dual water-pressure + conductivity detection",
    /* Powertrain · v2 EN (internal battery + USB-C, no removable) */
    "specs.pt.1": "Battery",
    "specs.pt.1v": "Built-in high-density Li-ion · < 100 Wh (airline-friendly)",
    "specs.pt.2": "Charging",
    "specs.pt.2v": "USB-C fast charge · ~2 h to full",
    "specs.pt.3": "Thrusters",
    "specs.pt.3v": "Brushless ×5 · seawater-stable",
    "specs.pt.4": "Flight Controller",
    "specs.pt.4v": "ArduSub 4.1.2 · dual IMU",
    /* Physical · v2 EN */
    "specs.ph.1": "Body Weight",
    "specs.ph.1v": "1.5–1.6 kg (measured · slight positive buoyancy in water)",
    "specs.ph.2": "Portability",
    "specs.ph.2v": "Backpack-friendly · airline-friendly",
    "specs.ph.3": "Physical Switch",
    "specs.ph.3v": "External waterproof master power switch",
    /* Bracelet · v2 EN */
    "specs.br.1": "MCU",
    "specs.br.1v": "ESP32-S3-WROOM",
    "specs.br.2": "Acoustic",
    "specs.br.2v": "DYP-C01B · networked with camera units",
    "specs.br.3": "Interaction",
    "specs.br.3v": "IMU wrist-flick + TapCode tap · no physical buttons",
    "specs.br.4": "Feedback",
    "specs.br.4v": "Linear motor haptics · lost-lock alert",
    "specs.br.5": "Battery",
    "specs.br.5v": "800 mAh · built-in · USB-C charged",

    "gallery.eyebrow": "<span class=\"index\">09</span> Prototype Evidence",
    "gallery.heading": "We don't stop at concept art.",
    "gallery.shot.1.cap": "2026·04 · Lab Assembly",
    "gallery.shot.1.title": "Physical Prototype",
    "gallery.shot.1.desc": "Palm-sized underwater camera · thruster structure assembly",
    "gallery.shot.2.cap": "ID PROPOSAL · v2.1 · 2026·03",
    "gallery.shot.2.title": "Industrial Design ID",
    "gallery.shot.2.desc": "Surface language · color & volume study",
    "gallery.shot.3.cap": "HARDWARE · PCB1 · REV 3 · 2026·03·17",
    "gallery.shot.3.title": "PCB · Main Control Board",
    "gallery.shot.3.desc": "Camera-side hardware · 3rd iteration",
    "gallery.shot.4.cap": "WATCH SCH · 2026·03",
    "gallery.shot.4.title": "Schematic · Acoustic Bracelet",
    "gallery.shot.4.desc": "Underwater multimodal interaction gateway",
    "gallery.shot.5.cap": "WATER TEST · 2026·04·28 · NO CUT · 11 consecutive logs",
    "gallery.shot.5.title": "Scene Expression",
    "gallery.shot.5.desc": "Freedive photography · consumer-facing product imagination",

    "business.eyebrow": "<span class=\"index\">10</span> Business Model",
    "business.heading": "Hardware acquires users. <em>HaaS</em> builds long-term value.",
    "business.1.title": "Consumer Hardware",
    "business.1.desc": "Differentiate on wireless following, palm deployment, and one-tap editing — not on camera specs. Product definition and end-to-end experience form the first competitive layer.",
    "business.2.title": "Dive Shop Rental",
    "business.2.desc": "Low-barrier entry for dive shops and travel. For shops: higher gear turnover and content output. For divers: no need to buy an underwater camera before the trip. Rental is the most effective form of consumer education.",
    "business.3.title": "Cloud AI Subscription",
    "business.3.desc": "GAN color restoration, smart editing, dive logs, production templates — everything requiring compute and asset libraries lives in the cloud, generating recurring subscription revenue. Hardware ASP fluctuates; HaaS delivers steady recurring revenue.",

    "roadmap.eyebrow": "<span class=\"index\">11</span> Milestones",
    "roadmap.heading": "Three steps to Kickstarter.",
    "roadmap.1.when": "Now · 2026",
    "roadmap.1.title": "POC · Proof of Concept",
    "roadmap.1.desc": "Acoustic positioning + auto-cruise + obstacle-avoid state machine proven; PCB iteration 3; actively recruiting core team members.",
    "roadmap.2.when": "Next · 2026&nbsp;Q4",
    "roadmap.2.title": "EP · Engineering Validation",
    "roadmap.2.desc": "Focused on verifying stable follow-loop, hydrostatic seal consistency, reliable launch/recovery, endurance, and serviceability.",
    "roadmap.3.when": "Launch · Summer 2027",
    "roadmap.3.title": "Kickstarter Launch",
    "roadmap.3.desc": "Launch global early-adopter conversion with real water-test footage, quantifiable metrics, and a dual-product-line narrative.",

    "moat.kicker": "14 · IP &amp; Patent Defense",
    "moat.heading": "Patent moat <em>filed and accepted</em>&nbsp;.",
    "moat.desc": "Four patents covering the product's hardest-to-replicate technical nodes have been filed with the China National Intellectual Property Administration: acoustic-visual fusion positioning, GAN underwater color restoration, dual-core control architecture, and dive-computer interaction — the core competitive barriers for EP and Kickstarter phases.",
    "moat.note": "3 accepted · 1 in submission · Applicant / Inventor: Yang Wenjun",
    "moat.1.title": "Underwater Acoustic-Visual Fusion Positioning &amp; Capture System",
    "moat.1.desc": "Invention patent · accepted by CNIPA",
    "moat.2.title": "Generative Underwater Color Restoration with Physical Environmental Metadata Constraints",
    "moat.2.desc": "Invention patent · accepted by CNIPA",
    "moat.3.title": "Vision-Control Decoupled Dual-Core Electronics Architecture for Micro AUV",
    "moat.3.desc": "Utility model patent · accepted by CNIPA",
    "moat.4.title": "Dive Computer Watch with Lightweight Acoustic Module &amp; Haptic Feedback",
    "moat.4.desc": "Utility model patent · in preparation",

    /* Founding Team */
    "team.eyebrow": "<span class=\"index\">12</span> Founding Team",
    "team.heading": "Champion team —<br class=\"desktop-only\">from <em>competition arena</em> to <em>shipping product</em>&nbsp;.",
    "team.lead": "Remo's core team comes from <strong style=\"color:var(--light);font-weight:500\">G_Robot, the underwater-robotics society at Beijing Information Science &amp; Technology University</strong> — a specialist team that holds both a <em style=\"font-style:normal;color:var(--accent)\">National First Prize at the \"Challenge Cup\" National College Student Extracurricular Academic Science &amp; Technology Competition</em> and the <em style=\"font-style:normal;color:var(--accent)\">RoboCup China underwater-robotics champion title</em>&nbsp;. Engineering capability proven repeatedly on the competition floor is the bedrock of Project Remo.",
    "team.founder.role": "Founder · Project Lead · CTO",
    "team.founder.title": "Beijing Information Science &amp; Technology University · Automation (Excellent Engineer Program)<br>President, G_Robot Society · ROV / ARV systems engineering",
    "team.stack.1.k": "Software",
    "team.stack.2.k": "Hardware",
    "team.stack.3.k": "Mechanical",
    "team.stack.4.k": "Academia",
    "team.award.1.title": "19th Challenge Cup National College Student Extracurricular Academic Competition · AI+Application Track",
    "team.award.1.desc": "National First Prize · \"DeepSmartShark\" — Embedded-AI autonomous control system for small unmanned underwater vehicles / Project Lead · CTO · Pitch speaker",
    "team.award.1.tag": "National 1st",
    "team.award.2.title": "China Robotics Competition × RoboCup China Open · Underwater Robotics Specialty",
    "team.award.2.desc": "National First Prize (Champion) · Underwater Operation track / Same period National First Prize (Runner-up) in finals + National Second Prize in Underwater Cruise",
    "team.award.2.tag": "Champion",
    "team.award.3.title": "17th International Advanced Robotics & Simulation Competition · Smart Ocean Track",
    "team.award.3.desc": "Underwater Operation (Champion) · Underwater Object Grasping (Champion) · Underwater Combat — all National First Prize",
    "team.award.3.tag": "3 × National 1st",
    "team.award.4.title": "Challenge Cup Beijing College Student Competition · \"Youth-Gathered AI\" Track",
    "team.award.4.desc": "Provincial Special Prize × 2",
    "team.award.4.tag": "Provincial Special",
    "team.award.5.title": "China International Ocean Underwater Robotics Competition · 6th International Marine Engineering Innovation",
    "team.award.5.desc": "ROV Track National Second Prize · AUV Track National Second Prize",
    "team.award.5.tag": "National 2nd",
    "team.note": "Behind every trophy is the same crew — covering acoustics, vision, control, mechanical structure and embedded AI as a <em style=\"font-style:normal;color:var(--accent)\">complete underwater-robotics engineering stack</em>&nbsp;. Project Remo is the first commercial product built on the technology stack this team has stress-tested on the competition floor.",

    "community.eyebrow": "<span class=\"index\">13</span> Community Feedback",
    "community.heading": "Your ideas,<br class=\"desktop-only\"><em>shape the product</em>&nbsp;.",
    "community.lead": "At the POC stage, we welcome all feedback — feature requests, use cases, or technical questions. Approved feedback is displayed here and directly influences EP-stage design decisions.",
    "community.btn.submit": "Submit Your Idea",
    "community.btn.view": "View All Feedback",
    "community.loading": "Loading community feedback...",
    "community.note": "Feedback is managed via GitHub Issues. No account registration required to submit. We review and respond within 48 hours.",

    "investors.eyebrow": "<span class=\"index\">14</span> For Investors",
    "investors.heading": "Verified claims,<br class=\"desktop-only\"><em>clearly layered</em>&nbsp;.",
    "investors.lead": "We only claim what has been verified through testing. Roadmap items are clearly marked \"in development\" or \"planned.\" Below is key information for angel-stage investors. For the full Deck and Tech Snapshot, contact the founding team.",
    "investors.1.num": "— 01 · Stage",
    "investors.1.title": "POC · Working Prototype Proven",
    "investors.1.desc": "Mechanical, PCB, control scripts, user interviews, and water-test footage are all archived. Demonstrable pipeline: immersion auto-unlock → auto-cruise → proximity obstacle avoidance → seamless post-dive upload → cloud color restoration.",
    "investors.2.num": "— 02 · Next",
    "investors.2.title": "2026&nbsp;Q4 Entering EP · Engineering Validation",
    "investors.2.desc": "Focused on stable follow-loop, hydrostatic seal consistency, continuous-run reliability, endurance, and serviceability — each with quantifiable target metrics.",
    "investors.3.num": "— 03 · Use of Funds",
    "investors.3.title": "Angel Round Allocation",
    "investors.3.desc": "Core team hires (embedded / control algorithms / mechanical), EP-stage supply chain & small-batch water testing, Kickstarter video & marketing. Every dollar maps to a verifiable milestone.",
    "investors.btn.1": "Request Tech Snapshot",
    "investors.btn.2": "View 90s Evidence Reel",

    "outro.heading": "Let go,<br class=\"desktop-only\"><em>let Remo take the shot</em>&nbsp;.",
    "outro.btn.1": "Talk to the Founding Team",
    "outro.btn.2": "Back to Top",
    "outro.meta.1.label": "Stage",
    "outro.meta.1.val": "POC · Working Prototype",
    "outro.meta.2.label": "Next Stop",
    "outro.meta.2.val": "EP · Engineering Validation · 2026&nbsp;Q4",
    "outro.meta.3.label": "Launch",
    "outro.meta.3.val": "Lite · Summer 2027",

    "sticky.specs": "5 Thrusters · Acoustic Positioning · Cruise 40–60&nbsp;min · 4K HiSilicon",
    "sticky.cta": "Talk to the Founding Team",

    "footer.tagline": "Wireless Underwater Follow-Cam · POC 2026",
    "footer.copyright": "© Project Remo · All rights reserved",

    "meta.title": "Project Remo — Wireless Underwater Follow-Cam",
    "meta.desc": "Project Remo is a wireless, palm-deployable underwater follow-cam. Auto-wake on entry, acoustic positioning, seamless post-dive upload, automatic cloud color restoration. It handles the shot so the diver doesn't have to.",
    "hero.product.alt": "Project Remo Underwater Intelligent Follow-Camera",
    "acoustic.img.alt": "Acoustic Link Underwater Scene · Diver and Remo Acoustic Communication",
    "compare.img.alt": "Comparison: Action Cam · Tethered ROV · Project Remo",
    "bracelet.img.alt": "Project Remo Acoustic Bracelet · DYP-C01B + ESP32-S3",
  }
};

/* ─── I18N Engine ───────────────────────────────────────────────────── */
const I18N_ATTR = "data-i18n";
const I18N_HTML_ATTR = "data-i18n-html";
const I18N_ALT_ATTR = "data-i18n-alt";

function getLang() {
  try { return localStorage.getItem("remo-lang") || "zh"; }
  catch (e) { return "zh"; }
}

function setLang(lang) {
  const dict = I18N[lang] || I18N["zh"];
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";

  // Text content — auto-detect HTML entities. If the translation string
  // contains &nbsp; or similar HTML entities, use innerHTML so they render
  // correctly instead of appearing as literal "&nbsp;" text.
  document.querySelectorAll(`[${I18N_ATTR}]`).forEach(el => {
    const key = el.getAttribute(I18N_ATTR);
    if (dict[key] !== undefined) {
      if (/&[a-z]+;/.test(dict[key])) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // HTML content
  document.querySelectorAll(`[${I18N_HTML_ATTR}]`).forEach(el => {
    const key = el.getAttribute(I18N_HTML_ATTR);
    if (dict[key] !== undefined) el.innerHTML = dict[key];

    // Re-trigger hero title animation if it's the title
    if (el.id === "hero-title") {
      requestAnimationFrame(() => {
        el.classList.remove("in");
        requestAnimationFrame(() => {
          window.setTimeout(() => el.classList.add("in"), 50);
        });
      });
    }
  });

  // Alt attributes
  document.querySelectorAll(`[${I18N_ALT_ATTR}]`).forEach(el => {
    const key = el.getAttribute(I18N_ALT_ATTR);
    if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
  });

  // Meta
  if (dict["meta.title"]) document.title = dict["meta.title"];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict["meta.desc"]) metaDesc.setAttribute("content", dict["meta.desc"]);

  // Update lang toggle UI (just toggle is-en class — keep span structure intact)
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.classList.toggle("is-en", lang === "en");
  }

  try { localStorage.setItem("remo-lang", lang); } catch (e) {}

  // Fix orphaned trailing characters after i18n is applied
  preventHeadingOrphans();
}

function toggleLang() {
  setLang(getLang() === "zh" ? "en" : "zh");
}

/* Prevent orphaned trailing characters in headings.
   On narrow screens (mobile), Chinese headings can split so that the
   last 1-2 characters — especially periods — appear alone on the
   final line. This function wraps the last 2-5 characters of every
   heading's last text node in a <span style="white-space:nowrap">,
   preventing them from being separated from the preceding text.

   For headings with inline tags (<em>/<br>), we walk the text nodes
   and only protect the last meaningful one. Punctuation-only trailing
   text nodes (e.g. "。") are merged with the previous sibling node
   before wrapping. */
function preventHeadingOrphans() {
  const RE_PUNCT = /^[。！？\.\!\?，,、；;：:）\)]+$/;
  const RE_PUNCT_TAIL = /[。！？\.\!\?，,、；;：:）\)]$/;

  document.querySelectorAll("h1, h2, h3").forEach((h) => {
    const walker = document.createTreeWalker(h, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let n;
    while ((n = walker.nextNode())) {
      const t = n.textContent || "";
      if (t.trim()) textNodes.push(n);
    }
    if (!textNodes.length) return;

    let last = textNodes[textNodes.length - 1];
    let tailText = last.textContent || "";

    // If the last text node is purely punctuation (1-2 chars like "。" or
    // ". "), merge it with the previous text node so we wrap a meaningful
    // word with its punctuation, not just punctuation alone.
    if (tailText.length <= 2 && RE_PUNCT.test(tailText.trim()) && textNodes.length >= 2) {
      const prev = textNodes[textNodes.length - 2];
      tailText = (prev.textContent || "") + tailText;
      // Remove the orphaned punctuation-only node, extend the previous node
      const span = document.createElement("span");
      span.style.whiteSpace = "nowrap";
      // Take last 4 chars of prev + all of current punctuation
      const prevText = prev.textContent || "";
      const keepLen = Math.min(prevText.length, 4);
      const prevPrefix = prevText.slice(0, -keepLen);
      const prevSuffix = prevText.slice(-keepLen) + (last.textContent || "");
      prev.textContent = prevPrefix;
      span.textContent = prevSuffix;
      prev.parentNode.insertBefore(span, prev.nextSibling);
      if (last !== prev) last.remove();
      return;
    }

    // Protect the last 3-5 characters. If the tail ends with punctuation,
    // protect more chars so the period stays with its word.
    let protectLen = 3;
    if (RE_PUNCT_TAIL.test(tailText)) protectLen = Math.min(tailText.length, 5);
    else if (tailText.length <= 4) protectLen = tailText.length;

    const prefix = tailText.slice(0, -protectLen);
    const suffix = tailText.slice(-protectLen);
    if (!prefix || !suffix) return;

    last.textContent = prefix;
    const span = document.createElement("span");
    span.style.whiteSpace = "nowrap";
    span.textContent = suffix;
    last.parentNode.insertBefore(span, last.nextSibling);
  });
}

/* ─── Init ─────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  setLang(getLang());
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) langBtn.addEventListener("click", toggleLang);
});

/* =========================================================================
   Interaction behaviours (unchanged)
   ========================================================================= */

(() => {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ─── 1. Topbar scroll state ───────────────────────────────────────── */
  const topbar = document.getElementById("topbar");
  if (topbar) {
    const onScroll = () => {
      topbar.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ─── 2. Reveal observer ───────────────────────────────────────────── */
  const reveals = document.querySelectorAll(".reveal, .eyebrow");
  if (prefersReduced) {
    reveals.forEach((el) => el.classList.add("in-view"));
  } else if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in-view"));
  }

  /* ─── 3. Hero title word-by-word entrance ──────────────────────────── */
  const heroTitle = document.getElementById("hero-title");
  if (heroTitle) {
    requestAnimationFrame(() => {
      window.setTimeout(() => heroTitle.classList.add("in"), 200);
    });
  }

  /* ─── 4. Counter numbers ───────────────────────────────────────────── */
  const counterEls = document.querySelectorAll("[data-count]");
  if (counterEls.length && "IntersectionObserver" in window && !prefersReduced) {
    const animateCounter = (el) => {
      const target = parseInt(el.dataset.count, 10);
      if (Number.isNaN(target)) return;
      const span = el.querySelector(".num-val");
      if (!span) return;

      const duration = target > 1000 ? 1600 : 1100;
      const startTime = performance.now();
      const startVal = 0;

      const tick = (now) => {
        const t = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const v = Math.round(startVal + (target - startVal) * eased);
        span.textContent = v;
        if (t < 1) requestAnimationFrame(tick);
        else span.textContent = target;
      };
      requestAnimationFrame(tick);
    };

    const counterIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counterEls.forEach((el) => counterIO.observe(el));
  }

  /* ─── 5. GAN before/after slider ───────────────────────────────────── */
  const slider = document.getElementById("color-slider");
  const restored = document.getElementById("color-restored");
  const handle = document.getElementById("color-handle");

  const updateColorCompare = (value) => {
    const v = Math.max(0, Math.min(100, Number(value)));
    if (restored) restored.style.clipPath = `inset(0 0 0 ${v}%)`;
    if (handle) handle.style.left = `${v}%`;
  };

  if (slider) {
    updateColorCompare(slider.value);
    slider.addEventListener("input", (e) => updateColorCompare(e.target.value));
  }

  /* ─── Smooth scroll for anchor links ───────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
    });
  });

  /* ─── Hero product subtle parallax on scroll ───────────────────────── */
  const heroProduct = document.querySelector(".hero-product");
  if (heroProduct && !prefersReduced) {
    let scrollY = 0;
    let ticking = false;
    const update = () => {
      const y = scrollY * 0.18;
      const rot = -6 + scrollY * 0.012;
      const img = heroProduct.querySelector("img");
      if (img) img.style.transform = `rotate(${rot}deg) translateY(${-y}px)`;
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ─── 6. Tech specs tab switcher ───────────────────────────────────── */
  const tabs = document.querySelectorAll(".specs-tabs .tab");
  const panels = document.querySelectorAll(".specs-panel");
  if (tabs.length && panels.length) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.tab;
        tabs.forEach((t) => {
          const on = t === tab;
          t.classList.toggle("active", on);
          t.setAttribute("aria-selected", on ? "true" : "false");
        });
        panels.forEach((p) => {
          p.classList.toggle("active", p.dataset.panel === target);
        });
      });
    });
  }

  /* ─── 6.5 Robust video loading with mirror fallback + prewarm ────────

     CRITICAL CONTEXT (rev 2): Empirical testing on real CN networks
     showed that jsDelivr / statically.io domains can be entirely
     unreachable from some ISPs (all 4 CDN mirrors timing out with
     ERR_CONNECTION_TIMED_OUT), while same-origin GitHub Pages stays
     reachable — because the page itself was just loaded from there,
     so the connection is hot. We previously had same-origin as the
     LAST fallback, which meant users on those ISPs waited ~25 seconds
     (5 mirrors × 5s timeout) before the videos finally appeared.

     New strategy: SAME-ORIGIN FIRST. The HTML's <source> already
     points at ./Video/V0X.mp4. If same-origin is fast (the common
     case), users see the video in 1-2 seconds. If it's slow, we fail
     over to jsDelivr / statically as fallbacks within 3 seconds.

     CDN PREWARM: while waiting on mirror N, we background-fetch the
     first 100 bytes of mirror N+1. This forces that PoP to back-fetch
     from GitHub now, so the switch is fast if we have to make it.

     MIRRORS (in order, lowest index = first try):
       0. ./Video/...                          ← same-origin (PRIMARY)
       1. https://cdn.jsdelivr.net/...        ← jsDelivr main
       2. https://gcore.jsdelivr.net/...      ← Gcore (Asia POPs)
       3. https://testingcf.jsdelivr.net/...  ← Cloudflare-only mirror
       4. https://cdn.statically.io/...       ← different service

     Why 3s timeout (not 5s): same-origin is local-ish (GitHub Pages
     edge) and should respond fast. 3s catches genuinely-broken
     same-origin loads quickly, and the failover chain is tighter.
     Total worst-case wait: 3s × 5 = 15s (was 25s).

     Console output: every state transition logs with `[Remo]` so
     users can debug in DevTools. */
  const __isWeChatUA = /MicroMessenger/i.test(navigator.userAgent);
  const isPreviewSafeMode =
    window.location.protocol === "file:" ||
    /Codex|ChatGPT|OpenAI/i.test(navigator.userAgent);
  window.__remoVideoUnlocked = false;

  const VIDEO_MIRRORS = [
    "./Video/",
    "https://cdn.jsdelivr.net/gh/LumishadeVoyager/Project-Remo-Web@main/Video/",
    "https://gcore.jsdelivr.net/gh/LumishadeVoyager/Project-Remo-Web@main/Video/",
    "https://testingcf.jsdelivr.net/gh/LumishadeVoyager/Project-Remo-Web@main/Video/",
    "https://cdn.statically.io/gh/LumishadeVoyager/Project-Remo-Web/main/Video/",
  ];
  const MIRROR_TIMEOUT_MS = 3000;

  // Background prewarm: trigger CDN to cache the first 100 bytes of
  // the next mirror's URL. This forces that CDN's PoP to back-fetch
  // from GitHub now, so if we have to switch later, it's already
  // cached. 100 bytes is too small to noticeably affect bandwidth.
  const prewarmedUrls = new Set();
  const prewarmMirror = (url) => {
    if (prewarmedUrls.has(url)) return;
    prewarmedUrls.add(url);
    try {
      fetch(url, {
        method: "GET",
        headers: { "Range": "bytes=0-100" },
        mode: "no-cors",
        cache: "no-store",
        credentials: "omit",
      }).catch(() => { /* swallow — purely best-effort warming */ });
    } catch (_) {}
  };

  const setupVideoFallback = (video, slot, hasInitialSource) => {
    if (!video || !slot || video.dataset.fallbackSetup === "1") return;
    video.dataset.fallbackSetup = "1";

    let idx = hasInitialSource ? 0 : -1;
    let timeoutId = null;

    const log = (msg) => {
      try { console.log(`[Remo] ${slot}: ${msg}`); } catch (_) {}
    };

    const clearTimer = () => {
      if (timeoutId) { clearTimeout(timeoutId); timeoutId = null; }
    };

    const startTimer = () => {
      clearTimer();

      const isLocal = VIDEO_MIRRORS[idx].startsWith("./");

      // Prewarm next CDN mirror (skip if next is local — same-origin
      // doesn't need PoP cache warming).
      if (idx + 1 < VIDEO_MIRRORS.length - 1
          && !VIDEO_MIRRORS[idx + 1].startsWith("./")) {
        prewarmMirror(`${VIDEO_MIRRORS[idx + 1]}${slot}.mp4`);
      }

      if (isLocal) {
        // STALL-BASED detection for same-origin. Some CN ISPs deliver
        // GitHub Pages at 10-30KB/s — at that throughput a 2MB video
        // takes 60-200s for full download but the first frame
        // (readyState=2) typically arrives much sooner. A hard 3s
        // timeout was killing in-progress downloads, so use the
        // `progress` event to detect "still receiving bytes" vs
        // "truly stalled". Only fail over if no bytes for 10s.
        let lastProgressMs = Date.now();
        let firstByteLogged = false;
        const onProgress = () => {
          lastProgressMs = Date.now();
          if (!firstByteLogged) {
            firstByteLogged = true;
            log(`first bytes received (same-origin)`);
          }
        };
        video.addEventListener("progress", onProgress);

        const STALL_TIMEOUT_MS = 10000;
        const tick = () => {
          if (video.readyState >= 2) {
            video.removeEventListener("progress", onProgress);
            return; // success — onLoadedData will fire
          }
          const stalledFor = Date.now() - lastProgressMs;
          if (stalledFor > STALL_TIMEOUT_MS) {
            video.removeEventListener("progress", onProgress);
            log(`same-origin stalled (no bytes for ` +
                `${(stalledFor / 1000).toFixed(1)}s) — failing to CDN`);
            tryNext();
            return;
          }
          timeoutId = setTimeout(tick, 2000);
        };
        timeoutId = setTimeout(tick, 2000);
      } else {
        // CDN mirrors: hard timeout to avoid getting stuck on
        // unreachable ones (CN ISPs sometimes block CDN domains).
        timeoutId = setTimeout(() => {
          if (video.readyState < 2) {
            log(`mirror ${idx + 1}/${VIDEO_MIRRORS.length} timeout after ${MIRROR_TIMEOUT_MS}ms`);
            tryNext();
          }
        }, MIRROR_TIMEOUT_MS);
      }
    };

    const tryNext = () => {
      clearTimer();
      idx++;
      if (idx >= VIDEO_MIRRORS.length) {
        log(`ALL ${VIDEO_MIRRORS.length} mirrors exhausted. User may need ` +
            `to refresh or use a VPN.`);
        return;
      }
      const url = `${VIDEO_MIRRORS[idx]}${slot}.mp4`;
      log(`trying mirror ${idx + 1}/${VIDEO_MIRRORS.length}: ${url}`);
      try {
        video.querySelectorAll("source").forEach((s) => s.remove());
        video.src = url;
        video.load();
      } catch (_) {}
      startTimer();
    };

    const onLoadedData = () => {
      clearTimer();
      log(`OK — playing from ${video.currentSrc}`);
    };

    const onError = () => {
      log(`error event on mirror ${idx + 1}/${VIDEO_MIRRORS.length}`);
      tryNext();
    };

    video.addEventListener("error", onError);
    video.addEventListener("loadeddata", onLoadedData);

    if (hasInitialSource) {
      if (video.error) {
        log("HTML source already errored, advancing to next mirror");
        tryNext();
      } else if (video.readyState >= 2) {
        onLoadedData();
      } else {
        log(`waiting on HTML source (mirror 1/${VIDEO_MIRRORS.length})...`);
        startTimer();
      }
    } else {
      tryNext();
    }
  };

  // Apply to ALL videos (V01-V05) — they all have HTML <source> now.
  //
  // Why we stopped using JS-driven dynamic <video> creation for V03-V05:
  // empirical Chrome testing (a79a6c9) showed that <video> elements
  // created via JS and given `video.src = ...` are given a much lower
  // priority by Chrome's resource scheduler than HTML-parsed <source>
  // elements. On the same slow CN network where V01/V02 (HTML source)
  // loaded instantly, V03/V04/V05 (JS-created src) received ZERO bytes
  // even after 30+ seconds. The fix was to give them all static HTML
  // <video><source></video> markup so they all share the same high
  // priority class.
  if (isPreviewSafeMode) {
    document.querySelectorAll("video[data-video-slot]").forEach((v) => {
      v.removeAttribute("autoplay");
      v.preload = "none";
      v.setAttribute("preload", "none");
    });
  } else {
    document.querySelectorAll("video[data-video-slot]").forEach((v) => {
      const slot = v.getAttribute("data-video-slot");
      setupVideoFallback(v, slot, /*hasInitialSource=*/ true);
    });
  }

  /* ─── 7. Sticky pre-order bar (appear after hero) ──────────────────── */
  const stickyBar = document.getElementById("sticky-bar");
  const hero = document.querySelector(".hero");
  if (stickyBar && hero) {
    const onScrollSticky = () => {
      const heroHeight = hero.offsetHeight;
      const docHeight = document.documentElement.scrollHeight;
      const viewport = window.innerHeight;
      const scrolled = window.scrollY;
      const passedHero = scrolled > heroHeight * 0.7;
      const nearBottom = scrolled + viewport > docHeight - 240;
      stickyBar.classList.toggle("show", passedHero && !nearBottom);
      stickyBar.setAttribute("aria-hidden", (passedHero && !nearBottom) ? "false" : "true");
    };
    window.addEventListener("scroll", onScrollSticky, { passive: true });
    window.addEventListener("resize", onScrollSticky);
    onScrollSticky();
  }

  /* ─── 8. Video autoplay — TWO completely different pipelines ───────────

     === The hard truth about WeChat ===
     After three rounds of trying to make autoplay "just work" in WeChat
     (IntersectionObserver, MutationObserver, heartbeat setInterval,
     WeixinJSBridgeReady kicks, every event listener under the sun), the
     diagnosis is final: **X5/WKWebView silently drops play() calls that
     are not on the same synchronous callstack as a user gesture.**

     A 1.5s heartbeat doesn't help — those play() calls fire from
     setInterval, which is NOT a user gesture context. IntersectionObserver
     doesn't help — same problem. Even play() inside a touchend listener
     can be dropped if the gesture target isn't the video itself.

     The ONLY guaranteed path in WeChat: paint a tap-to-play poster, let
     the user tap it, call play() in the SAME tick as the click handler.
     Then leave the rest of the page alone (no flow-step videos, no
     concurrent decode pressure on the X5 network stack).

     === Pipeline split ===
       WeChat:  inject .showcase-tap overlay → tap → synchronous play()
       Else:    full "never-die" pipeline (heartbeat + observers + events)
     */
  const isWeChat = __isWeChatUA;

  const ensureMuted = (v) => {
    v.muted = true;
    v.setAttribute("muted", "");
    v.defaultMuted = true;
    v.playsInline = true;
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "true");
    v.setAttribute("x5-playsinline", "true");
    v.setAttribute("x5-video-player-type", "h5");
    v.setAttribute("x5-video-player-fullscreen", "false");
  };

  const absolutize = (url) => {
    try { return new URL(url, document.baseURI).toString(); }
    catch (_) { return url; }
  };

  if (isWeChat) {
    /* ── WeChat path ─────────────────────────────────────────────────
       Single video on the page (showcase V01). The overlay sits on top
       of it and offers TWO independent paths to actually see the reel:

         Path A (inline)  : Tap the overlay → synchronous play() on the
                            <video>. Works on most X5 builds but X5 is
                            allowed by spec to silently refuse.
         Path B (fallback): Tap the embedded <a href="*.mp4"> link →
                            X5 launches its built-in fullscreen MP4
                            player. This is guaranteed by WeChat's own
                            spec — they cannot block it without breaking
                            every Moments/PYQ video link.

       Path B is the safety net. Even if Path A is dropped by X5, the
       user always has a one-tap route to actually view the reel. */
    const showcaseFrame = document.querySelector(".showcase-frame");
    const showcaseVideo = document.querySelector("video.showcase-video");
    if (!showcaseFrame || !showcaseVideo) return;

    ensureMuted(showcaseVideo);

    // Resolve every <source> URL to an absolute URL (X5 mis-resolves
    // relatives across hash changes).
    showcaseVideo.querySelectorAll("source").forEach((s) => {
      const orig = s.getAttribute("src");
      if (orig && !/^https?:\/\//.test(orig)) {
        s.setAttribute("src", absolutize(orig));
      }
    });
    showcaseVideo.load();

    // Build a stable absolute URL for the fallback <a>. Prefer the
    // local GitHub Pages path (same-origin, no CDN warm-up), then the
    // declared data-video-fallback (jsDelivr).
    const firstSource = showcaseVideo.querySelector("source");
    const videoUrl = (firstSource && firstSource.getAttribute("src"))
      || absolutize(showcaseVideo.getAttribute("data-video-fallback") || "")
      || "";

    // CDN fallback if local source fails.
    const cdnFallback = showcaseVideo.getAttribute("data-video-fallback");
    if (cdnFallback) {
      let swapped = false;
      const onErr = () => {
        if (swapped) return;
        swapped = true;
        showcaseVideo.querySelectorAll("source").forEach((s) => s.remove());
        showcaseVideo.src = absolutize(cdnFallback);
        showcaseVideo.load();
      };
      showcaseVideo.addEventListener("error", onErr, true);
      showcaseVideo.querySelectorAll("source").forEach((s) => s.addEventListener("error", onErr));
    }

    // ── Build the dual-path tap overlay ──────────────────────────────
    const overlay = document.createElement("div");
    overlay.className = "showcase-tap";
    overlay.innerHTML = `
      <div class="showcase-tap-inline" role="button" aria-label="点击启用视频播放">
        <div class="showcase-tap-icon" aria-hidden="true"></div>
        <div class="showcase-tap-title">点击启用视频播放</div>
        <div class="showcase-tap-hint">微信浏览器需要手动启用 · TAP TO PLAY</div>
      </div>
      <a class="showcase-tap-fallback" href="${videoUrl}" target="_blank" rel="noopener noreferrer">
        若点击无效，<u>点这里全屏观看 →</u>
      </a>
    `;

    // Path A: inline tap.
    const inlineBtn = overlay.querySelector(".showcase-tap-inline");
    const activate = (ev) => {
      ev && ev.preventDefault && ev.preventDefault();
      ev && ev.stopPropagation && ev.stopPropagation();
      // SYNCHRONOUS play() on showcase + every flow video on the page.
      // Must not be wrapped in setTimeout / Promise — that would lose
      // the user-gesture context and X5 drops the call. Iterating
      // synchronously inside the click handler keeps every play() call
      // on the same gesture stack, which is the only path X5 honors.
      document.querySelectorAll("video").forEach((v) => {
        try {
          v.muted = true;
          v.setAttribute("muted", "");
          v.playsInline = true;
          v.play();
        } catch (_) {}
      });
      // Optimistically hide the inline prompt; if X5 silently refused
      // showcase, the user can still see and tap the fallback link.
      overlay.classList.add("activated");
      // Mark playback as unlocked so any flow video that attaches
      // later (V02-V05 lazy probes finishing after this tap) plays
      // immediately.
      window.__remoVideoUnlocked = true;
    };
    inlineBtn.addEventListener("touchend", activate, { passive: false });
    inlineBtn.addEventListener("click", activate);

    // Path B: the <a> link is its own user gesture. No JS needed — X5
    // handles href="*.mp4" with its built-in fullscreen player.

    // If video actually starts playing, fade the entire overlay out.
    showcaseVideo.addEventListener("playing", () => {
      overlay.classList.add("playing");
      setTimeout(() => overlay.remove(), 500);
    }, { once: true });

    showcaseFrame.appendChild(overlay);

    // Loop guard — X5 sometimes drops `loop`.
    showcaseVideo.addEventListener("ended", () => {
      try { showcaseVideo.currentTime = 0; showcaseVideo.play(); } catch (_) {}
    });

    // Try once on load — some X5 builds do allow muted autoplay after
    // the page is fully loaded. Cheap to try; if X5 drops it, the
    // overlay is still there for the user.
    const tryOnce = () => { try { showcaseVideo.play(); } catch (_) {} };
    if (document.readyState === "complete") tryOnce();
    else window.addEventListener("load", tryOnce);

    return;
  }

  if (isPreviewSafeMode) {
    document.querySelectorAll("video").forEach((v) => {
      ensureMuted(v);
      v.addEventListener("click", () => {
        try { v.load(); } catch (_) {}
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      });
    });
    return;
  }

  /* ── Non-WeChat path: full "never-die" pipeline ───────────────────── */

  const tryPlay = (v) => {
    if (!v) return;
    if (!v.paused && !v.ended) return;
    ensureMuted(v);
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  };

  const tryPlayAll = () => {
    document.querySelectorAll("video").forEach(tryPlay);
  };

  document.querySelectorAll("video[data-video-fallback]").forEach((v) => {
    let swapped = false;
    const onErr = () => {
      if (swapped) return;
      swapped = true;
      const url = v.getAttribute("data-video-fallback");
      if (!url) return;
      v.querySelectorAll("source").forEach((s) => s.remove());
      v.src = absolutize(url);
      v.load();
      tryPlay(v);
    };
    v.addEventListener("error", onErr, true);
    v.querySelectorAll("source").forEach((s) => s.addEventListener("error", onErr));
  });

  const setupVideo = (v) => {
    ensureMuted(v);
    v.addEventListener("click", () => tryPlay(v));
    v.addEventListener("touchend", () => tryPlay(v), { passive: true });
    v.addEventListener("loadeddata", () => tryPlay(v));
    v.addEventListener("canplay", () => tryPlay(v));
    v.addEventListener("canplaythrough", () => tryPlay(v));
    v.addEventListener("ended", () => { try { v.currentTime = 0; tryPlay(v); } catch (_) {} });
    v.addEventListener("stalled", () => tryPlay(v));
    v.addEventListener("suspend", () => tryPlay(v));
    v.addEventListener("pause", () => {
      // If we intentionally paused this video (because it scrolled
      // off-screen via IntersectionObserver), leave it paused.
      // Otherwise this is an involuntary pause (X5 OS-level interrupt,
      // tab visibility loss, etc.) — try to resume after a short delay.
      if (v.dataset.ioOffscreen === "1") return;
      setTimeout(() => tryPlay(v), 80);
    });
    try { v.load(); } catch (_) {}
  };
  document.querySelectorAll("video").forEach(setupVideo);

  if (typeof IntersectionObserver !== "undefined") {
    // Play videos that are on/near screen, pause those that aren't.
    // Reason: 5 looping <video> elements all decoding at once on the
    // same GPU causes stutter — even Chrome's media stack can't fully
    // hardware-accelerate 5 concurrent H.264 streams on most laptops/
    // phones. Pausing off-screen videos frees decoder slots and gives
    // the visible video full GPU bandwidth.
    //
    // rootMargin 200px gives a generous pre-roll so the video is
    // already playing by the time the user scrolls it into view.
    // Same margin on the other side means a video stays playing for
    // 200px past the viewport before pausing — prevents pause/resume
    // thrashing during slow scrolls near a video boundary.
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const v = entry.target;
        if (entry.isIntersecting) {
          v.dataset.ioOffscreen = "";
          tryPlay(v);
        } else {
          v.dataset.ioOffscreen = "1";
          try { v.pause(); } catch (_) {}
        }
      });
    }, { threshold: 0.01, rootMargin: "200px 0px 200px 0px" });
    document.querySelectorAll("video").forEach((v) => io.observe(v));

    if (typeof MutationObserver !== "undefined") {
      const moObs = new MutationObserver((mutations) => {
        mutations.forEach((m) => m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.tagName === "VIDEO") io.observe(node);
          node.querySelectorAll && node.querySelectorAll("video").forEach((v) => io.observe(v));
        }));
      });
      moObs.observe(document.body, { childList: true, subtree: true });
    }
  }

  if (typeof MutationObserver !== "undefined") {
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.tagName === "VIDEO") setupVideo(node);
          node.querySelectorAll && node.querySelectorAll("video").forEach(setupVideo);
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  ["touchstart", "touchend", "click", "pointerdown", "pointerup", "scroll", "scrollend"].forEach((evt) =>
    document.addEventListener(evt, tryPlayAll, { passive: true, capture: true })
  );

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tryPlayAll();
  });
  window.addEventListener("pageshow", tryPlayAll);
  window.addEventListener("focus", tryPlayAll);
  window.addEventListener("load", tryPlayAll);

  setInterval(tryPlayAll, 1500);
})();

/* ═══════════════════════════════════════════════════════════════════
   9. COMMUNITY FEEDBACK — GitHub Issues integration
   ═══════════════════════════════════════════════════════════════════ */

(function initCommunityFeedback() {
  console.log("[Community] init starting...");
  const feedbackGrid = document.getElementById("feedback-grid");
  if (!feedbackGrid) { console.log("[Community] feedback-grid NOT FOUND, aborting"); return; }
  console.log("[Community] feedback-grid found, continuing...");

  const REPO = "LumishadeVoyager/Project-Remo-Web";
  const API_URL = `https://api.github.com/repos/${REPO}/issues`;

  // Type emoji mapping
  const typeEmoji = {
    "功能建议": "💡",
    "Feature Request": "💡",
    "使用场景": "🎯",
    "Use Case": "🎯",
    "技术问题": "🔧",
    "Technical Question": "🔧",
    "购买咨询": "💰",
    "Purchase Inquiry": "💰",
    "其他": "💬",
    "Other": "💬"
  };

  // Extract type from issue body (handles mixed zh/en like "功能建议 Feature Request")
  function extractType(body) {
    if (!body) return "其他";
    const match = body.match(/### 反馈类型[\s\S]*?\n\n([^\n]+)/);
    if (!match) return "其他";
    const raw = match[1].trim();
    // Map common type values to display labels
    if (/功能建议|Feature Request/i.test(raw)) return "功能建议";
    if (/使用场景|Use Case/i.test(raw)) return "使用场景";
    if (/技术问题|Technical Question/i.test(raw)) return "技术问题";
    if (/购买咨询|Purchase Inquiry/i.test(raw)) return "购买咨询";
    return raw;
  }

  // Extract the actual feedback content (详细描述 field)
  function extractContent(body) {
    if (!body) return "";
    const match = body.match(/### 详细描述[\s\S]*?\n\n([\s\S]+?)(?:\n\n###|$)/);
    if (match) {
      const text = match[1].trim();
      if (text && text !== "_No response_") return text;
    }
    return "";
  }

  // Extract name from issue body
  function extractName(body) {
    if (!body) return null;
    const match = body.match(/### 称呼\(可选\)[\s\S]*?\n\n([^\n]+)/);
    if (match && match[1].trim() && match[1].trim() !== "_No response_") {
      return match[1].trim();
    }
    return null;
  }

  // Clean body text (remove form fields)
  function cleanBody(body) {
    if (!body) return "";
    // Remove form field headers
    let cleaned = body.replace(/### [^\n]+\n\n/g, "");
    // Remove checkbox lines
    cleaned = cleaned.replace(/- \[.\] [^\n]+\n/g, "");
    // Get first paragraph only
    const firstPara = cleaned.split("\n\n")[0];
    return firstPara.trim();
  }

  // Format date
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "今天";
    if (diffDays === 1) return "昨天";
    if (diffDays < 7) return `${diffDays} 天前`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} 周前`;

    return date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  }

  // Render feedback card
  function renderCard(issue) {
    const type = extractType(issue.body);
    const name = extractName(issue.body);
    const content = extractContent(issue.body);
    const emoji = typeEmoji[type] || "💬";

    const card = document.createElement("article");
    card.className = "feedback-card reveal";
    card.innerHTML = `
      <div class="feedback-header">
        <span class="feedback-type">${emoji} ${type}</span>
        <span class="feedback-number">#${issue.number}</span>
      </div>
      <h3 class="feedback-title">${issue.title.replace(/\[反馈\]/g, "").trim()}</h3>
      <div class="feedback-body">${content || cleanBody(issue.body)}</div>
      <div class="feedback-footer">
        <span class="feedback-author">${name || "匿名用户"}</span>
        <span class="feedback-date">${formatDate(issue.created_at)}</span>
      </div>
      <a class="feedback-link" href="${issue.html_url}" target="_blank" rel="noopener noreferrer">
        查看详情
      </a>
    `;
    return card;
  }

  // Fetch and render
  async function loadFeedback() {
    try {
      console.log("[Community] fetching approved issues from GitHub API...");
      const response = await fetch(
        `${API_URL}?labels=approved&state=open&sort=created&direction=desc&per_page=6`,
        {
          headers: {
            "Accept": "application/vnd.github.v3+json"
          }
        }
      );

      console.log("[Community] fetch response:", response.status);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const issues = await response.json();
      console.log("[Community] issues received:", issues.length);

      feedbackGrid.innerHTML = "";

      if (issues.length === 0) {
        console.log("[Community] no approved issues found");
        feedbackGrid.innerHTML = `
          <div class="feedback-empty">
            <h3>暂无反馈</h3>
            <p>成为第一个分享想法的人!你的反馈将直接影响 Project Remo 的产品设计。</p>
          </div>
        `;
        return;
      }

      issues.forEach((issue, index) => {
        console.log(`[Community] rendering card #${issue.number}: ${issue.title}`);
        const card = renderCard(issue);
        card.style.animationDelay = `${index * 0.1}s`;
        feedbackGrid.appendChild(card);
        // Cards are added dynamically after the initial IntersectionObserver
        // scan. Without manual reveal they stay opacity:0 forever.
        requestAnimationFrame(() => card.classList.add("in-view"));
      });
      console.log("[Community] all cards rendered");

    } catch (error) {
      console.error("[Community] Failed to load feedback:", error);
      feedbackGrid.innerHTML = `
        <div class="feedback-empty">
          <h3>加载失败</h3>
          <p>无法连接到 GitHub API。请稍后再试或直接访问
            <a href="https://github.com/${REPO}/issues?q=is%3Aissue+label%3Aapproved"
               target="_blank"
               style="color:var(--accent);text-decoration:underline">
              GitHub Issues
            </a>
          </p>
        </div>
      `;
    }
  }

  // Load on page ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadFeedback);
  } else {
    loadFeedback();
  }
})();
