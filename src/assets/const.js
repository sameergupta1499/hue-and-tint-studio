import { listPageData } from '@/assets/listPageData';
import { BRANDS } from '@/assets/brandNameConst';

const WORK_URL_PREFIX = '/work'
const content_server = 'https://d35ymq1x8kutsa.cloudfront.net'
const data = {
    "home": {
        "logo-png": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/logo.png",
        "intro-video": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/homepage/intro-video.mp4",
        "brand-works-video": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/homepage/brand-work.mp4",
        "first-card-left": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/homepage/first-card-left.jpg",
        "first-card-right": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/homepage/first-card-right.jpg",
        "second-card-left": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/homepage/second-card-left.jpg",
        "second-card-right": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/homepage/second-card-right.jpg",
        "third-card-left": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/homepage/third-card-left.jpg",
        "third-card-right": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/homepage/third-card-right.jpg",
    },
    "work": [
        {
            "id": 1,
            "brand": BRANDS["titan"],
            "category": "Accessories",
            "tasks": "Product Animation & Ad Design",
            "timeline": "On-Going Since May 2023",
            "work_page_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/titan.jpg",
            "work_list_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work-list-page/titan/hero.jpg",
            "page-url": WORK_URL_PREFIX + "/titan/",
            "work_list_page": listPageData[BRANDS["titan"]]
        },
        {
            "id": 2,
            "brand": BRANDS["the_face_shop"],
            "category": "Beauty & Personal Care",
            "timeline": "Till Dec 2022",
            "tasks": "Product Animation & Ad Design",
            "work_page_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/the-face-shop.jpg",
            "work_list_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work-list-page/the-face-shop/hero.jpg",
            "page-url": WORK_URL_PREFIX + "/the-face-shop/",
            "work_list_page": listPageData[BRANDS["the_face_shop"]]
        },
        {
            "id": 3,
            "brand": BRANDS["secret_alchemist"],
            "category": "Beauty & Personal Care",
            "timeline": "On-Going Since June 2023",
            "tasks": "Social Media Design",
            "work_page_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/secret-alchemist.jpg",
            "work_list_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work-list-page/secret-alchemist/hero.jpg",
            "page-url": WORK_URL_PREFIX + "/secret-alchemist/",
            "work_list_page": listPageData[BRANDS["secret_alchemist"]]
        },
        {
            "id": 4,
            "brand": BRANDS["zeme_fresh"],
            "category": "Beauty & Personal Care",
            "timeline": "On-Going Since March 2022",
            "tasks": "Graphic Design Package",
            "work_page_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/zeme-fresh.jpg",
            "work_list_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work-list-page/zeme-fresh/hero.jpg",
            "page-url": WORK_URL_PREFIX + "/zeme-fresh/",
            "work_list_page": listPageData[BRANDS["zeme_fresh"]]
        },
        {
            "id": 5,
            "brand": BRANDS["the_pink_foundry"],
            "category": "Beauty & Personal Care",
            "timeline": "Till December 2022",
            "tasks": "Social Media Design & Animation",
            "work_page_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/the-pink-foundry.jpg",
            "work_list_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work-list-page/the-pink-foundry/hero.jpg",
            "page-url": WORK_URL_PREFIX + "/the-pink-foundry/",
            "work_list_page": listPageData[BRANDS["the_pink_foundry"]]
        },
        {
            "id": 6,
            "brand": BRANDS["asa_beauty"],
            "category": "Beauty & Personal Care",
            "timeline": "Till December 2022",
            "tasks": "Social Media Design",
            "work_page_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/asa-beauty.jpg",
            "work_list_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work-list-page/asa-beauty/hero.jpg",
            "page-url": WORK_URL_PREFIX + "/asa-beauty/",
            "work_list_page": listPageData[BRANDS["asa_beauty"]]
        },
        {
            "id": 7,
            "brand": BRANDS["vyb_by_fastrack"],
            "category": "Accessories",
            "timeline": "September to October 2022",
            "tasks": "Ad Campaign Design",
            "work_page_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/vyb-by-fastrack.jpg",
            "work_list_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work-list-page/vyb-by-fastrack/hero.jpg",
            "page-url": WORK_URL_PREFIX + "/vyb-by-fastrack/",
            "work_list_page": listPageData[BRANDS["vyb_by_fastrack"]]
        },
        {
            "id": 8,
            "brand": BRANDS["ira_soles"],
            "category": "Accessories",
            "timeline": "On-Going Since January 2023",
            "tasks": "Product Animation & Ad Design",
            "work_page_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/ira-soles.jpg",
            "work_list_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work-list-page/ira-soles/hero.jpg",
            "page-url": WORK_URL_PREFIX + "/ira-soles/",
            "work_list_page": listPageData[BRANDS["ira_soles"]]
        },
        {
            "id": 9,
            "brand": BRANDS["see_love"],
            "category": "Beauty & Personal Care",
            "timeline": "Till September 2022",
            "tasks": "Social Media Design",
            "work_page_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/see-love.jpg",
            "work_list_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work-list-page/see-love/hero.jpg",
            "page-url": WORK_URL_PREFIX + "/see-love/",
            "work_list_page": listPageData[BRANDS["see_love"]]
        },
        {
            "id": 10,
            "brand": BRANDS["label_society"],
            "category": "Clothing",
            "timeline": "On-Going Since March 2023",
            "tasks": "Video Editing",
            "work_page_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/label-society.jpg",
            "work_list_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work-list-page/label-society/hero.jpg",
            "page-url": WORK_URL_PREFIX + "/label-society/",
            "work_list_page": listPageData[BRANDS["label_society"]]
        },
        {
            "id": 11,
            "brand": BRANDS["cerys_skintials"],
            "category": "Beauty & Personal Care",
            "timeline": "Till March 2023",
            "tasks": "Social Media Design",
            "work_page_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/cerys-skintials.jpg",
            "work_list_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work-list-page/cerys-skintials/hero.jpg",
            "page-url": WORK_URL_PREFIX + "/cerys-skintials/",
            "work_list_page": listPageData[BRANDS["cerys_skintials"]]
        },
        {
            "id": 12,
            "brand": BRANDS["shipyaari"],
            "category": "Logistics",
            "timeline": "On-Going Since January 2023",
            "tasks": "Motion Graphics & Email Design",
            "work_page_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/shipyaari.jpg",
            "work_list_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work-list-page/shipyaari/hero.jpg",
            "page-url": WORK_URL_PREFIX + "/shipyaari/",
            "work_list_page": listPageData[BRANDS["shipyaari"]]
        },
        {
            "id": 13,
            "brand": BRANDS["fuelled"],
            "category": "Food & Beverage",
            "timeline": "Till February 2022",
            "tasks": "Graphic Design Package",
            "work_page_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/fuelled.jpg",
            "work_list_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work-list-page/fuelled/hero.jpg",
            "page-url": WORK_URL_PREFIX + "/fuelled/",
            "work_list_page": listPageData[BRANDS["fuelled"]]
        },
        {
            "id": 14,
            "brand": BRANDS["spirit_animal"],
            "category": "Clothing",
            "timeline": "On-Going Since April 2023",
            "tasks": "Product Animation & Ad Design",
            "work_page_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/spirit-animal.jpg",
            "work_list_hero_img_url": "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work-list-page/spirit-animal/hero.jpg",
            "page-url": WORK_URL_PREFIX + "/spirit-animal/",
            "work_list_page": listPageData[BRANDS["spirit_animal"]]
        },
    ]
};

const about_data = [
    {
        url: "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/spirit-animal.jpg",
        heading: "MEDIA DESIGN",
        content: "Elevate your online presence with our captivating social media design service. I create visually stunning graphics that will make your social media profiles pop. From eye-catching posts to compelling cover images, I know how brand stand out in the crowded to make your digital landscape."

    },
    {
        url: "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/spirit-animal.jpg",
        heading: "social media design",
        content: "Elevate your online presence with our captivating social media design service. I create visually stunning graphics that will make your social media profiles pop. From eye-catching posts to compelling cover images, I know how brand stand out in the crowded to make your digital landscape."
    },    
    {
        url: "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/spirit-animal.jpg",
        heading: "social media design",
        content: "Elevate your online presence with our captivating social media design service. I create visually stunning graphics that will make your social media profiles pop. From eye-catching posts to compelling cover images, I know how brand stand out in the crowded to make your digital landscape."
    },    
    {
        url: "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/spirit-animal.jpg",
        heading: "social media design",
        content: "Elevate your online presence with our captivating social media design service. I create visually stunning graphics that will make your social media profiles pop. From eye-catching posts to compelling cover images, I know how brand stand out in the crowded to make your digital landscape."
    },    
    {
        url: "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/spirit-animal.jpg",
        heading: "social media design",
        content: "Elevate your online presence with our captivating social media design service. I create visually stunning graphics that will make your social media profiles pop. From eye-catching posts to compelling cover images, I know how brand stand out in the crowded to make your digital landscape."
    },    
    {
        url: "https://d35ymq1x8kutsa.cloudfront.net/hue-and-tint-studio/work/spirit-animal.jpg",
        heading: "EMAIL DESIGN",
        content: "Elevate your online presence with our captivating social media design service. I create visually stunning graphics that will make your social media profiles pop. From eye-catching posts to compelling cover images, I know how brand stand out in the crowded to make your digital landscape."

    }
];
let getWorkBrandData = (brnd) => {
    return data.work.find(item => item.brand === BRANDS[brnd]);
};



const client_story = [
    {
      id: 1,
      message: `Delighted to have Tanya as our graphic designer at SA. She's a highly talented and hardworking asset who immediately understood our brand's aesthetic and consistently delivered stunning results. We're fortunate to have her on our team.`,
      brand_img: "/batman.png",
      brand_img_href: getWorkBrandData('secret_alchemist')['page-url'],  // Update with the actual URL
      name: "Ankita Thadani",
      designation: "Founder, Secret Alchemist",
    },
    {
      id: 2,
      message: `It's been wonderful working with Tanya, she is very professional in her approach and on time with her deliverables. Her grasp on the design language of the brand has been a big plus for us. I highly recommend her!`,
      brand_img: "/batman.png",
      brand_img_href: getWorkBrandData('zeme_fresh')['page-url'],  // Update with the actual URL
      name: "Prerna Bhutani",
      designation: "Founder, Zeme Fresh",
    },
    {
      id: 3,
      message: `I have been working with Tanya for almost 2 years now and I can see her grow and share her design skills with brands across categories. She is dedicated and disciplined. Looking forward to seeing her grow in all aspects of life.`,
      brand_img: "/batman.png",
      brand_img_href: "",
      name: "Diksha Tandon",
      designation: "Co-Founder, A Narrative",
    },
    {
      id: 4,
      message: `I've had the pleasure of collaborating with Tanya and it's been an amazing 9-month journey. She grasps briefs well, delivers on time, and her creativity shines. Her dedication, patience, and commitment to perfection left me truly impressed. I highly recommend Tanya!`,
      brand_img: "/batman.png",
      brand_img_href: "",  // Update with the actual URL
      name: "Shivani Singh",
      designation: "Senior Manager, Guava",
    },
    {
      id: 5,
      message: `You really are one of the best designers I have worked with. I've never had to explain briefs and that really helped!`,
      brand_img: "/batman.png",
      brand_img_href: getWorkBrandData('the_face_shop')['page-url'],
      name: "Riya Shah",
      designation: "Social Media Manager, The Face Shop",
    },
    {
      id: 6,
      message: `Tanya understands our brand aesthetics like no other! We’ve had the most easy-going working relationship and her creatives have added a lot to the overall brand look and feel on instagram. She’s very receptive to feedback and it’s been a delight to work with her. :)`,
      brand_img: "/batman.png",
      brand_img_href: getWorkBrandData('label_society')['page-url'],
      name: "Aastika & Geetanjali",
      designation: "Founders, Label Society",
    }
    // Add more client stories as needed
  ];






export { about_data, data, getWorkBrandData, client_story };
