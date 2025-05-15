let resumeData = {
  imagebaseurl: "",
  name: "Mattis Chu 朱茂榛",
  role: "The One You Need",
  roleDescription: "",
  socialLinks: [
    {
      name: "github",
      url: "https://github.com/Mattis3858",
      className: "fa fa-github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/%E8%8C%82%E6%A6%9B-%E6%9C%B1-152b96259/",
      className: "fa fa-linkedin",
    },
    {
      name: "Email",
      url: "mailto: chumattis@gmail.com",
      className: "fas fa-envelope",
    },
    {
      name: "IG",
      url: "https://www.instagram.com/zhumaozhen/",
      className: "fa fa-instagram",
    },
    {
      name: "FB",
      url: "https://www.facebook.com/profile.php?id=100010560076903",
      className: "fa fa-facebook",
    },
  ],
  aboutme:
    // "朱茂榛，現於政治大學資訊管理學系就讀。目前大四，為政大羽球校隊一員，不怕磨練。隨著大學期間不斷的累積讓我逐漸發掘寫程式的樂趣，也透過一次一次的課程專案找到自己有興趣的方向: 網頁開發。之後用了一個寒假的時間學習HTML以及CSS，之後也買了Udemy上的Javascript以及React.js課程，課餘時間也會閱讀React之官方文件持續精進自己的技能，後來大三上的企業資料通訊也讓我更了解專業的網路知識，另外還有一堂產銷資訊系統的課程期末專案需要使用Flask開發系統，而我作為開發人員也了解到前後端溝通的重要，同時透過網路資源以及官方文件自行學習關於後端Node.js以及Express.js，讓我更加確定自己未來的方向，也希望未來能夠進入相關的領域繼續探索。",
    [
      {
        description: "",
        content: `我叫朱茂榛 Mattis，	目前碩一，大學以及研究所皆就讀國立政治大學資訊管理學系。擁有強大 problem solving 的能力，不畏懼困難或新的挑戰，願意與團隊一起溝通、合作。同時也是政大羽球校隊的一員，熱愛運動，不怕辛苦和磨練。`,
      },
    ],

  educationDescription: [
    {
      description: "",
      content: `目前的碩士論文題目為 "Dynamic Tripartite Graph Neural Networks for Real-Time Recommendations in Live-Streaming E-Commerce"，本研究期望提出一種基於用戶、主播與產品三方異構圖的即時推薦模型，直接捕捉三者間複雜關係。模型利用圖神經網絡結合 PlatoGL 框架，實現連續更新與即時推薦，提升用戶參與度與轉換率。`,
    },
  ],
  workingExperienceDescription: [
    {
      description: "AI 研究助理 & 開發",
      technique:
        "AI / Machine Learning / Fine-tuning / LLMs / LangChain / RAG / ChromaDB",
      content: `目前與政大財管系一起合作，在「環境揭露品質、永續金融及企業永續投資」國科會研究計畫中擔任研究助理。在研究中主要負責開發一套自動化系統，用於評估 TCFD 揭露報告，從而大幅降低 70% 的人力審查工作量並協助提升報告書評估效率。使用 Tensorflow 和 Hugging Face 對 ChineseBERT 進行微調，以解決文件級別過擬合和數據稀疏的問題。此外，還設計了一個基於文本平均嵌入向量的神經網絡，用於文件級別的多標籤分類，初步達到了約 71.18% 的準確率，再整合 RAG 與基於 LLM 的嵌入和 Chroma 向量資料庫，最終將分類準確率提升至 78.57%。`,
    },
    {
      description: "網頁前端實習生",
      technique: "React.js",
      content: `實習工作內容為使用 React.js 開發及維護網頁 ERP 應用程式、串接後台 API 數據動態渲染數據。參與公司內部跨部門會議，與 UI/UX Team 以及 PM 團隊共同開會，確保溝通順暢並按時交付專案成果。有效增進個人能力和與其他部門的溝通協調能力，並自行找資料或官方文件和研究更好的架構以及優化程式碼，有效提升自我進步，比起去大公司實習是做產品的維護及優化，我認為在新創公司從無到有開發第一線的產品的經驗更難能可貴。希望未來能將這些經驗活用於更多的專案、研究以及工作，也感謝未來巢科技公司讓我有這個難得的實習機會。`,
    },
  ],

  projectExperienceDescription: [
    {
      description: "TeaJourney - 大學生全新品茶體驗",
      technique: "Next.js / PostgreSQL(Supabase) / TailwindCSS",
      content: `大四上結束了經歷一年半的畢業專案開發，在「2023 Innoserve 資訊應用服務創新競賽資訊應用組獲得佳作」以及「2023 政大資管系專案發表第三名」。專案名稱為「TeaJourney」，目標是為大學生提供全新的品茶體驗，與在地茶行以及政大 USR 團隊合作交流。我在團隊中主要負責使用 Next.js 進行前端開發、透過 Supabase 建立雲端 PostgreSQL 資料庫、使用 Vercel 進行雲端部署、前後端串接、需求分析、專案進度管理，透過過去實務上的經驗讓能更快的開發畢業專案並與團隊進行溝通合作。同時，我也善於規劃工作流程與專案開發時間，幫助團隊在時程內完成任務，與團隊成員一同完成畢業專案。`,
    },
    {
      description: "Knowledge Wave - 科技知識庫",
      technique: "Next.js / TailwindCSS / GCP / Langchain / Web Crawling",
      content: `碩一上與組員一同開發 Knowledge Wave，透過自動化爬蟲每天抓取多個技術資訊來源（如 GitHub、Medium、CSDN）的最新文章，並利用 GCP 服務處理與儲存資料。平台採用 ETL 流程，先擷取文章標題、內容、網址、發布日期、標籤與按讚數，再進行文字清洗、翻譯（統一轉換成英文標籤）及向量化處理，存入 GCS 與 BigQuery（含向量資料庫）中。為各工程師使用者減少了每日搜索新技術以及追蹤新文章的時間成本。其中我主要負責前端網頁的開發、前後端串接以及後端文章爬蟲模組的開發。`,
    },
    {
      description: "",
      technique: "",
      content: `在學期間在許多專案中負責製作網頁，對網頁開發產生濃厚興趣，因此除了學校的課業外，在課餘時間自行學習 React.js、Vue.js 等前端框架，另外也學習 Flask 以及 Next.js 等網頁後端及全端的框架，在大三期間的產銷資訊系統課程中，我們小組的專題主題為幫助果乾小農管理銷貨、庫存管理資訊系統，我在其中負責前後端的開發以及串接。未來希望能結合前面所述之資訊以及金融科技能力應用於職涯中。除了網頁開發以外，其他專案也負責過使用者需求分析、資料庫存取與管理、企劃書撰寫等工作項目。`,
    },
  ],

  address: "台北市文山區",
  email: "chumattis@gmail.com",
  website: "https://",
  education: [
    {
      UniversityName: "國立政治大學",
      specialization: "資訊管理學系 碩士",
    },
    {
      UniversityName: "國立政治大學",
      specialization: "資訊管理學系 學士",
    },
  ],
  experience: [
    {
      title: "AI 研究助理及開發",
      company:
        "國立政治大學 - 國科會研究計畫「環境揭露品質、永續金融及企業永續投資」",
      time: "2024/04 ~ Present",
    },
    {
      title: "網頁前端實習生",
      company: "未來巢科技",
      time: "2023/05 ~ 2023/11",
    },
  ],
  achievements: [
    {
      Achievements:
        "國科會研究計畫「環境揭露品質、永續金融及企業永續投資」研究助理",
    },
    {
      Achievements: "網頁前端實習生",
    },
    {
      Achievements: "大學部課程「Java 程式設計」教學助理",
    },
    {
      Achievements: "2023 Innoserve 資訊應用服務創新競賽 資訊應用組 佳作",
    },
    {
      Achievements: "2023 政大資管系專案發表第三名",
    },
    {
      Achievements: "多益 930 分金色證書",
    },
    {
      Achievements: "政大金融科技學程",
    },
    {
      Achievements: "政治大學羽球校隊一員，曾任資管系羽球系隊隊長，球齡13年",
    },
  ],
  skillsDescription: "Skills & Abilities",
  skills: [
    {
      skillid: 3,
      skillname: "AI / Machine Learning / Python",
    },
    {
      skillid: 3,
      skillname: "LLMs / Fine-tuning / LangChain / RAG / Vector DB",
    },
    {
      skillid: 3,
      skillname: "Javascript / React.js / Next.js / TailwindCSS",
    },
    {
      skillid: 4,
      skillname: "GCP / GCS / BigQuery / BigTable / Looker Studio",
    },
    {
      skillid: 4,
      skillname: "MySQL / MongoDB / PostgreSQL",
    },
    {
      skillid: 3,
      skillname: "Git",
    },
    {
      skillid: 4,
      skillname: "Java / JSP",
    },
    {
      skillid: 5,
      skillname: "Node.js / ExpressJS",
    },
  ],
  portfolio: [
    {
      name: "TCFD Report Evaluation System",
      description:
        "Python / ML(Tensorflow) / Fine-tuning / LLMs / LangChain / RAG / ChromaDB",
      imgurl: "images/portfolio/TCFD.jpeg",
      url: "https://docs.google.com/presentation/d/1EW8qX2fvIntDv09hYI9DEnDJMLYt2HwnZPz9vqTYSyo/edit#slide=id.g3515f27f2cf_0_0",
    },
    {
      name: "TeaJourney",
      description: "Next.js / Supabase / PostgreSQL / TailwindCSS",
      imgurl: "images/portfolio/teajourney.png",
      url: "https://teajourney.vercel.app/",
    },
    {
      name: "Knowledge Wave",
      description: "Next.js / TailwindCSS / GCP / Langchain / Web Crawling",
      imgurl: "images/portfolio/Knowledge-Wave.png",
      url: "https://data-model-final-project.vercel.app/",
    },
    {
      name: "Production and Selling Information System",
      description: "Python / Flask",
      imgurl: "images/portfolio/information-system.png",
      url: "https://github.com/Mattis3858/Producing_And_Selling_Information_System",
    },
    {
      name: "House Price Prediction",
      description: "Python / Convolutional Neural Network",
      imgurl: "images/portfolio/house-pricing-prediction.png",
      url: "https://github.com/Mattis3858/Artificial_Intelligence_in_Business_Application",
    },
    {
      name: "Beat Google",
      description: "Java / JSP",
      imgurl: "images/portfolio/beat-google.jpg",
      url: "https://github.com/Mattis3858/DSWeb/tree/master/DSWeb",
    },
  ],
  line: "https://line.me/ti/p/jo7YqhRSVE",
  instagram: "https://www.instagram.com/zhumaozhen/",
  discordId: "Mattis#2732",
  github: "https://github.com/Mattis3858",
  linkedIn:
    "https://www.linkedin.com/in/%E8%8C%82%E6%A6%9B-%E6%9C%B1-152b96259/",
};

export default resumeData;
