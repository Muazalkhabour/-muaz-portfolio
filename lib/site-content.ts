export type ContentLocale = "ar" | "en";

export type TechGroupIcon = "frontend" | "motion" | "data";

export type TechGroup = {
  title: string;
  label: string;
  description: string;
  items: string[];
  accentClass: string;
  icon: TechGroupIcon;
};

export type ProjectPreviewMode = "real-estate" | "default";

export type ProjectCaseStudy = {
  title: string;
  summary: string;
  homeSummary?: string;
  tag: string;
  objective: string;
  stack: string[];
  href?: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref?: string;
  previewLabel: string;
  previewHeadline?: string;
  previewSubline?: string;
  previewBars: number[];
  previewClassName: string;
  previewMode: ProjectPreviewMode;
  featured?: boolean;
  challenge: string;
  solution: string;
  value: string;
  results?: string[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ServicePath = {
  title: string;
  teaser: string;
  description: string;
  href: string;
  homeCta: string;
  pageCta: string;
};

export type ServiceDecisionGuide = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

export const technologyGroups: Record<ContentLocale, TechGroup[]> = {
  ar: [
    {
      title: "Frontend Foundations",
      label: "Core UI",
      description: "Next.js و React و TypeScript لتطوير واجهات منظمة وقابلة للصيانة والتوسع.",
      items: ["Next.js", "React", "TypeScript"],
      accentClass: "from-amber-200/14 via-orange-300/8 to-transparent",
      icon: "frontend",
    },
    {
      title: "Motion & Experience",
      label: "Visual Depth",
      description: "Framer Motion و Three.js و Tailwind CSS لتطبيق معالجة بصرية وحركة مدروسة تدعم تجربة الاستخدام.",
      items: ["Framer Motion", "Three.js", "Tailwind CSS"],
      accentClass: "from-cyan-300/16 via-sky-300/8 to-transparent",
      icon: "motion",
    },
    {
      title: "Data & Systems",
      label: "Logic Layer",
      description: "Node.js و Prisma و PostgreSQL عند الحاجة إلى طبقة بيانات ومنطق تطبيقي وبنية أكثر نضجًا.",
      items: ["Node.js", "Prisma", "PostgreSQL"],
      accentClass: "from-emerald-300/16 via-teal-300/8 to-transparent",
      icon: "data",
    },
  ],
  en: [
    {
      title: "Frontend Foundations",
      label: "Core UI",
      description: "Next.js, React, and TypeScript for structured interfaces that are maintainable and scalable.",
      items: ["Next.js", "React", "TypeScript"],
      accentClass: "from-amber-200/14 via-orange-300/8 to-transparent",
      icon: "frontend",
    },
    {
      title: "Motion & Experience",
      label: "Visual Depth",
      description: "Framer Motion, Three.js, and Tailwind CSS for controlled visual treatment and motion that support interaction quality.",
      items: ["Framer Motion", "Three.js", "Tailwind CSS"],
      accentClass: "from-cyan-300/16 via-sky-300/8 to-transparent",
      icon: "motion",
    },
    {
      title: "Data & Systems",
      label: "Logic Layer",
      description: "Node.js, Prisma, and PostgreSQL when the project requires a stronger application layer, data handling, and system structure.",
      items: ["Node.js", "Prisma", "PostgreSQL"],
      accentClass: "from-emerald-300/16 via-teal-300/8 to-transparent",
      icon: "data",
    },
  ],
};

export const marketingChannels: Record<ContentLocale, { title: string; description: string }[]> = {
  ar: [
    {
      title: "المنصات الاجتماعية",
      description: "Instagram, Facebook, TikTok, و Snapchat لبناء الوصول السريع والهوية والتفاعل.",
    },
    {
      title: "الظهور المهني والمحتوى",
      description: "LinkedIn و YouTube لدعم الحضور المهني والمحتوى الأعمق والأكثر استمرارية.",
    },
    {
      title: "الإعلانات الرقمية",
      description: "Google Ads و Meta Ads لربط الموقع بمسارات اكتساب أوضح واستهداف أدق.",
    },
  ],
  en: [
    {
      title: "Social Platforms",
      description: "Instagram, Facebook, TikTok, and Snapchat for reach, identity, and audience interaction.",
    },
    {
      title: "Professional Presence",
      description: "LinkedIn and YouTube for stronger professional visibility and deeper long-form content.",
    },
    {
      title: "Digital Advertising",
      description: "Google Ads and Meta Ads for clearer acquisition paths and sharper targeting.",
    },
  ],
};

export const projectPrinciples: Record<ContentLocale, string[]> = {
  ar: [
    "تعرض كل دراسة حالة الإشكالية الأساسية، المعالجة المقترحة، والأثر العملي للمخرج النهائي.",
    "يتم تقييم الواجهة هنا بوصفها أداة استخدام واتصال، لا بوصفها معالجة شكلية فقط.",
    "المنهج ثابت: وضوح في الرسالة، اتساق في البنية، وهوية بصرية مرتبطة بهدف المنتج أو الجهة.",
  ],
  en: [
    "Each case study presents the core problem, the proposed treatment, and the practical value of the resulting output.",
    "The interface is evaluated here as a tool for use and communication, not as visual treatment alone.",
    "The approach remains consistent: message clarity, structural coherence, and visual identity aligned with the product or business objective.",
  ],
};

export const projectShowcase: Record<ContentLocale, ProjectCaseStudy[]> = {
  ar: [
    {
      title: "AQARI",
      summary:
        "منصة عقارية متكاملة صُممت لتقديم تجربة أكثر نضجًا ووضوحًا في سوق العقارات، حيث تجمع بين البحث الدقيق، عرض الوحدات بشكل مقنع، متابعة العقود، ولوحات الإدارة ضمن نظام واحد.",
      homeSummary:
        "منصة عقارية متكاملة تجمع البحث والعقود والإدارة ضمن تجربة أوضح وأكثر احترافية.",
      tag: "Real Estate SaaS",
      objective: "تشغيل داخلي + حضور مهني",
      stack: ["Property Search", "Contracts", "Admin Dashboard"],
      href: "https://aqari-saas.vercel.app/",
      primaryCta: "شاهد المشروع مباشرًا",
      secondaryCta: "شاهد صفحة المشاريع",
      secondaryHref: "/projects",
      previewLabel: "Search, listings, contracts",
      previewBars: [88, 76, 92],
      previewClassName: "from-amber-200/25 via-cyan-300/10 to-transparent",
      previewMode: "real-estate",
      featured: true,
      challenge: "جمع البحث، العقود، ولوحات الإدارة ضمن تجربة واحدة لا تبدو ثقيلة أو مربكة.",
      solution: "تنظيم الرحلة بين الاكتشاف، المقارنة، المتابعة، والإدارة داخل واجهة أوضح وأكثر إقناعًا بصريًا.",
      value: "ترفع الثقة، تسرّع القرار، وتمنح المكتب العقاري حضورًا رقميًا أكثر احترافية.",
      results: [
        "رحلة استخدام متسقة من الاكتشاف إلى المتابعة",
        "عرض منظم للوحدات والخدمات العقارية ضمن واجهة موحدة",
        "ربط الواجهة الأمامية بوظائف الإدارة ضمن نظام واحد",
      ],
    },
    {
      title: "لوحة تحكم لحظية",
      summary:
        "واجهة بيانات لحظية تركز على إبراز المؤشرات المهمة بسرعة وتقديم قراءة واضحة للفريق أو الإدارة دون ازدحام بصري.",
      homeSummary: "لوحة بيانات تبرز المؤشرات المباشرة بسرعة وتسهّل اتخاذ القرار دون تشويش.",
      tag: "Dashboard",
      objective: "تشغيل داخلي وقراءة مؤشرات",
      stack: ["React", "Realtime Data", "Charts"],
      primaryCta: "استعرض هذا النمط",
      secondaryCta: "ناقش الفكرة",
      secondaryHref: "#contact",
      previewLabel: "Live metrics overview",
      previewHeadline: "قراءة فورية للمؤشرات التي تحسم القرار",
      previewSubline: "لوحة منظمة تبرز الأداء، التغيرات، والإشارات المهمة في لحظتها.",
      previewBars: [56, 88, 72],
      previewClassName: "from-cyan-300/20 via-sky-300/10 to-transparent",
      previewMode: "default",
      challenge: "تكثيف بيانات كثيرة داخل واجهة واحدة من دون أن تضيع المؤشرات المهمة أو يشعر المستخدم بالضغط.",
      solution: "بناء تسلسل بصري يبرز الحالة العامة أولًا ثم التغيرات والتنبيهات والاتجاهات التي تستحق الانتباه.",
      value: "مناسب للمنتجات والفرق التي تعتمد على القراءة السريعة للمؤشرات واتخاذ القرار التشغيلي بصورة مستمرة.",
    },
    {
      title: "منصة أدوات ذكية",
      summary:
        "منتج رقمي يجمع الأتمتة وأدوات الذكاء الاصطناعي ضمن واجهة أوضح، بحيث يفهم المستخدم القيمة بسرعة ويكمل عمله بسلاسة.",
      homeSummary: "منصة تجمع الأتمتة والذكاء الاصطناعي ضمن تدفق أوضح وأسهل في الفهم والاستخدام.",
      tag: "AI Tools",
      objective: "تبنّي المنتج ووضوح القيمة",
      stack: ["Next.js", "AI Workflows", "Automation"],
      primaryCta: "ناقش فكرتك",
      secondaryCta: "تواصل الآن",
      secondaryHref: "#contact",
      previewLabel: "Workflow orchestration",
      previewHeadline: "أتمتة أوضح لمسارات العمل الذكية",
      previewSubline: "واجهة تجمع الأدوات والمهام والذكاء الاصطناعي ضمن تدفق أكثر سرعة ومرونة.",
      previewBars: [74, 69, 86],
      previewClassName: "from-emerald-300/20 via-teal-300/10 to-transparent",
      previewMode: "default",
      challenge: "تقديم أدوات متعددة ومسارات ذكية في منتج واحد من غير أن يبدو معقدًا أو تقنيًا أكثر من اللازم.",
      solution: "تنظيم الأدوات والمهام والاقتراحات الذكية ضمن تدفق عمل واضح يشرح الفكرة أثناء الاستخدام نفسه.",
      value: "مناسب للمنصات التي تحتاج إلى عرض منظم لفكرة المنتج وتجربة استخدام تسهّل الفهم والتبنّي.",
    },
  ],
  en: [
    {
      title: "AQARI",
      summary:
        "A real-estate SaaS product designed to bring search, listings, contracts, and admin workflows into one clearer experience.",
      homeSummary:
        "A real-estate platform that brings search, contracts, and management into one clearer and more professional flow.",
      tag: "Real Estate SaaS",
      objective: "Internal operations + professional presence",
      stack: ["Property Search", "Contracts", "Admin Dashboard"],
      href: "https://aqari-saas.vercel.app/",
      primaryCta: "View live project",
      secondaryCta: "View projects page",
      secondaryHref: "/en/projects",
      previewLabel: "Search, listings, contracts",
      previewBars: [88, 76, 92],
      previewClassName: "from-amber-200/25 via-cyan-300/10 to-transparent",
      previewMode: "real-estate",
      featured: true,
      challenge: "Combining search, contracts, and admin workflows without making the experience feel heavy or fragmented.",
      solution: "A clearer journey across discovery, comparison, follow-up, and management inside one structured interface.",
      value: "Stronger trust, faster decisions, and a more professional digital presence for real-estate operations.",
      results: [
        "A consistent user journey from discovery to follow-up",
        "A structured presentation of listings and real-estate services",
        "One product linking client-facing experience with internal administration",
      ],
    },
    {
      title: "Live Analytics Dashboard",
      summary:
        "A real-time data interface focused on surfacing the right metrics quickly and making operational reading clearer for teams and decision-makers.",
      homeSummary: "A real-time dashboard concept that surfaces the right signals quickly and keeps decision-making clearer.",
      tag: "Dashboard",
      objective: "Internal operations and metric clarity",
      stack: ["React", "Realtime Data", "Charts"],
      primaryCta: "Explore the concept",
      secondaryCta: "Discuss a similar build",
      secondaryHref: "#contact",
      previewLabel: "Live metrics overview",
      previewHeadline: "Instant visibility into the metrics that shape decisions",
      previewSubline: "A cleaner dashboard that surfaces performance, movement, and useful signals at the right moment.",
      previewBars: [56, 88, 72],
      previewClassName: "from-cyan-300/20 via-sky-300/10 to-transparent",
      previewMode: "default",
      challenge: "Presenting dense information without hiding the key signals or making the interface feel overloaded.",
      solution: "A visual hierarchy that highlights overall status first, then changes, alerts, and metrics that deserve attention.",
      value: "Relevant for teams and products that rely on rapid metric reading and recurring operational decisions.",
    },
    {
      title: "Smart Workflow Platform",
      summary:
        "A digital product concept that brings automation and AI tools into a clearer workflow, so users understand the value faster and move through tasks more smoothly.",
      homeSummary: "A workflow product that combines automation and AI tools in a clearer and easier-to-adopt experience.",
      tag: "AI Tools",
      objective: "Product adoption and value clarity",
      stack: ["Next.js", "AI Workflows", "Automation"],
      primaryCta: "Discuss the idea",
      secondaryCta: "Start a conversation",
      secondaryHref: "#contact",
      previewLabel: "Workflow orchestration",
      previewHeadline: "Smarter workflow automation with clearer structure",
      previewSubline: "A product interface that connects tasks, tools, and AI workflows in a more efficient flow.",
      previewBars: [74, 69, 86],
      previewClassName: "from-emerald-300/20 via-teal-300/10 to-transparent",
      previewMode: "default",
      challenge: "Presenting multiple tools and smart flows inside one product without making it feel too technical or crowded.",
      solution: "Organizing tasks, tools, and AI assistance inside a flow that explains the product through actual use.",
      value: "A strong fit for platforms that need a clear product explanation and a more accessible adoption path.",
    },
  ],
};

export const faqItems: Record<ContentLocale, FAQItem[]> = {
  ar: [
    {
      question: "هل نبدأ بموقع كامل أم صفحة هبوط فقط؟",
      answer: "يعتمد ذلك على طبيعة الهدف الاتصالي. إذا كان المشروع يتمحور حول عرض واحد أو حملة واحدة وإجراء محدد، فصفحة الهبوط تكون أكثر ملاءمة من حيث التركيز. أما إذا كان المطلوب تقديم خدمات متعددة وبناء صورة مؤسسية أكثر اكتمالًا، فالموقع الكامل يكون الخيار الأنسب.",
    },
    {
      question: "هل الأفضل إعادة تصميم الموقع الحالي أم بناء موقع جديد؟",
      answer: "إذا كانت الإشكالية محصورة في المعالجة البصرية، فقد تكون إعادة التصميم كافية. أما إذا كان الخلل بنيويًا في الرسالة أو تسلسل المحتوى أو الأساس التقني، فإن إعادة البناء من البداية تكون في العادة أكثر اتساقًا وكفاءة على المدى المتوسط.",
    },
    {
      question: "هل يجب أن يكون المحتوى جاهزًا بالكامل قبل البداية؟",
      answer: "ليس بالضرورة. يكفي وجود تصور أولي واضح للخدمة والجمهور والهدف. بعد ذلك يمكن تطوير الرسالة والعناوين والبنية التحريرية ضمن مرحلة التخطيط، وهو ما يؤدي غالبًا إلى محتوى أكثر اتساقًا ودقة من إعداد جميع النصوص مسبقًا بمعزل عن الهيكل العام.",
    },
    {
      question: "كيف أعرف أن موقعي الحالي يضعف التحويل؟",
      answer: "تظهر هذه المشكلة عادة عندما لا يتمكن الزائر من فهم العرض بسرعة، أو عندما تبقى الخطوة التالية غير واضحة، أو عندما تكون كثافة العناصر أعلى من قدرتها على التوجيه. في هذه الحالة تكون الإشكالية مرتبطة ببنية المسار ووضوح الرسالة أكثر من ارتباطها بالشكل البصري وحده.",
    },
    {
      question: "هل يمكن دعم العربية والإنجليزية في نفس المشروع؟",
      answer: "نعم. يمكن تصميم تجربة ثنائية اللغة تراعي اتجاه القراءة، وتناسق المحتوى، ووحدة الهيكل بين النسختين، بما يضمن ظهور المشروع كمنتج رقمي واحد ذي هوية متماسكة.",
    },
    {
      question: "ما أفضل طريقة لبدء النقاش؟",
      answer: "المدخل الأنسب هو تقديم وصف أولي منظم للفكرة والمتطلبات الأساسية. ويُعد نموذج brief المختصر الخيار الأفضل عندما يكون الهدف هو الانتقال مباشرة إلى نطاق عمل أكثر تحديدًا ومناقشة أكثر كفاءة.",
    },
  ],
  en: [
    {
      question: "Should we start with a full website or just a landing page?",
      answer: "The choice depends on the communication objective. If the project centers on a single offer, campaign, or defined user action, a landing page is usually the more appropriate format. If the business requires broader institutional presentation, multiple service explanations, and a more complete digital presence, a full website is generally the stronger option.",
    },
    {
      question: "Should we redesign the current site or build a new one?",
      answer: "If the existing structure remains sound and the weakness is primarily visual, a redesign may be sufficient. If the site is unclear in message, information flow, or technical foundation, rebuilding is often the more coherent and efficient decision.",
    },
    {
      question: "Do I need all content ready before we begin?",
      answer: "Not necessarily. A preliminary understanding of the offer, audience, and intended outcome is enough to begin. The messaging, headlines, and structure can then be developed within the planning phase, which typically produces a more coherent final result than preparing all text in isolation beforehand.",
    },
    {
      question: "How do I know my current site is weakening conversion?",
      answer: "This is usually the case when visitors cannot understand the offer quickly, when the next action remains ambiguous, or when the interface contains many elements without producing clear guidance. In such cases, the issue is typically structural and strategic rather than merely visual.",
    },
    {
      question: "Can the project support both Arabic and English?",
      answer: "Yes. A bilingual experience can be designed with proper direction handling, structural consistency, and aligned messaging so that both language versions function as one integrated digital product.",
    },
    {
      question: "What is the best way to start the conversation?",
      answer: "The most effective starting point is a concise and structured outline of the project and its primary requirements. A brief form is especially useful when the goal is to move efficiently toward a clearer scope and a more practical discussion.",
    },
  ],
};

export const servicePaths: Record<ContentLocale, ServicePath[]> = {
  ar: [
    {
      title: "تطوير مواقع احترافية",
      teaser: "مناسب للمشروعات التي تحتاج إلى حضور رقمي مؤسسي وبنية عرض واضحة للخدمات أو الجهة.",
      description: "مواقع أعمال ومؤسسات وصفحات تعريفية تركّز على وضوح الرسالة، الاتساق البصري، والأداء التقني المستقر.",
      href: "/services/web-development",
      homeCta: "تفاصيل تطوير المواقع",
      pageCta: "تفاصيل الخدمة",
    },
    {
      title: "صفحات هبوط مهيأة للتحويل",
      teaser: "مناسبة للعروض المركزة والحملات التي تتطلب مسارًا اتصاليًا مباشرًا وإجراءً محددًا.",
      description: "صفحات مخصصة للحملات أو العروض الأساسية، تُبنى حول إجراء رئيسي واضح وتسلسل محتوى موجّه.",
      href: "/services/landing-pages",
      homeCta: "تفاصيل صفحات الهبوط",
      pageCta: "تفاصيل الخدمة",
    },
    {
      title: "واجهات ومنتجات رقمية",
      teaser: "موجهة للمنصات ولوحات التحكم والمنتجات التي تتطلب وضوحًا وظيفيًا وبنية استخدام منضبطة.",
      description: "تصميم وتطوير واجهات للمنتجات والمنصات ولوحات التحكم مع اهتمام خاص بالتسلسل الوظيفي وسهولة الاستخدام.",
      href: "/projects",
      homeCta: "شاهد المشاريع المرتبطة",
      pageCta: "شاهد المشاريع القريبة",
    },
    {
      title: "حضور رقمي متكامل",
      teaser: "مناسب للحالات التي تتطلب مواءمة الموقع مع الرسالة والمنصات والإعلانات ضمن إطار موحد.",
      description: "مواءمة الموقع مع الرسالة التسويقية والمنصات الاجتماعية والإعلانات الرقمية ضمن منظومة اتصال أكثر اتساقًا.",
      href: "/technologies",
      homeCta: "شاهد المنهج والأدوات",
      pageCta: "شاهد الأدوات والمنهج",
    },
  ],
  en: [
    {
      title: "Professional Web Development",
      teaser: "Suitable for projects that require a clearer institutional presence and a more structured service presentation.",
      description: "Business and corporate websites focused on message clarity, visual consistency, and reliable technical performance.",
      href: "/en/services/web-development",
      homeCta: "Web-development details",
      pageCta: "Service details",
    },
    {
      title: "Conversion-Focused Landing Pages",
      teaser: "Appropriate for focused offers and campaigns that depend on one explicit user action.",
      description: "Dedicated pages for campaigns or offers, structured around one primary action and a clear communication sequence.",
      href: "/en/services/landing-pages",
      homeCta: "Landing-page details",
      pageCta: "Service details",
    },
    {
      title: "Interfaces and Digital Products",
      teaser: "Designed for dashboards and products where functional clarity, structure, and usability are central requirements.",
      description: "Structured interfaces for dashboards, products, and digital platforms with emphasis on usability and information hierarchy.",
      href: "/en/projects",
      homeCta: "View related projects",
      pageCta: "View related projects",
    },
    {
      title: "Integrated Digital Presence",
      teaser: "Relevant when the website must align with messaging, platforms, and paid visibility as one system.",
      description: "Integration of the website with messaging, social channels, and advertising activity within one coherent digital framework.",
      href: "/en/technologies",
      homeCta: "View method and tools",
      pageCta: "View tools and method",
    },
  ],
};

export const serviceDecisionGuides: Record<ContentLocale, ServiceDecisionGuide[]> = {
  ar: [
    {
      title: "إذا كان لديك نشاط بعدة خدمات",
      description: "فإن الموقع المؤسسي يكون غالبًا الخيار الأنسب، لأنه يوفّر مساحة أوضح لعرض الهوية والخدمات وبنية المحتوى.",
      href: "/services/web-development",
      cta: "الاطلاع على مسار الموقع المؤسسي",
    },
    {
      title: "إذا كان لديك عرض واحد أو حملة واضحة",
      description: "فإن صفحة الهبوط تكون أكثر ملاءمة، لأنها تضبط الرسالة ضمن مسار واحد وتوجّه الزائر إلى إجراء محدد.",
      href: "/services/landing-pages",
      cta: "الاطلاع على مسار صفحة الهبوط",
    },
    {
      title: "إذا كنت غير متأكد من المسار المناسب",
      description: "فإن النموذج المختصر يساعد على جمع المتطلبات الأولية وتحديد المسار الأنسب بصورة منهجية.",
      href: "/contact",
      cta: "الانتقال إلى نموذج brief",
    },
  ],
  en: [
    {
      title: "If your business has multiple services",
      description: "A structured business website is usually the more suitable option because it provides clearer room for identity, service architecture, and future expansion.",
      href: "/en/services/web-development",
      cta: "Review the website path",
    },
    {
      title: "If you have one focused offer or campaign",
      description: "A landing page is often the more appropriate option because it concentrates the message and directs attention to one defined action.",
      href: "/en/services/landing-pages",
      cta: "Review the landing-page path",
    },
    {
      title: "If you are still unsure which path fits",
      description: "The brief form helps collect the initial requirements and determine the most appropriate path in a more methodical way.",
      href: "/en/contact",
      cta: "Open the brief form",
    },
  ],
};