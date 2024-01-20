import { listPageData } from '@/assets/listPageData';
import { BRANDS } from '@/assets/brandNameConst';

const WORK_URL_PREFIX  = '/work'

const data = {
    "home": {
        "logo-png": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/logo.png?updatedAt=Latest",
        "intro-video": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/homepage/intro-video.mp4?updatedAt=Latest",
        "brand-works-video": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/homepage/brand-work.mp4?updatedAt=Latest",
        "first-card-left": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/homepage/first-card-left.jpg?updatedAt=Latest",
        "first-card-right": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/homepage/first-card-right.jpg?updatedAt=Latest",
        "second-card-left": "https://images.ctfassets.net/8b1jz4cf6kyy/6aosNheaRtPUBQRf4RE2fx/48291d8abbe63cccb400c9efa0660fc1/45.png?w=1024&fm=webp&q=92",
        "second-card-right": "https://images.ctfassets.net/8b1jz4cf6kyy/6aosNheaRtPUBQRf4RE2fx/48291d8abbe63cccb400c9efa0660fc1/45.png?w=1024&fm=webp&q=92",
        "third-card-left": "https://images.ctfassets.net/8b1jz4cf6kyy/6aosNheaRtPUBQRf4RE2fx/48291d8abbe63cccb400c9efa0660fc1/45.png?w=1024&fm=webp&q=92",
        "third-card-right": "https://images.ctfassets.net/8b1jz4cf6kyy/6aosNheaRtPUBQRf4RE2fx/48291d8abbe63cccb400c9efa0660fc1/45.png?w=1024&fm=webp&q=92",
    },
    "work": [
        {
            "id":1,
            "brand": BRANDS["titan"],
            "category": "Accessories",
            "tasks": "Product Promotion Ad Design",
            "timeline": "On-Going Since 2023",
            "work_page_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/titan.jpg?updatedAt=Latest",
            "work_list_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work-list-page/titan/hero.jpg?updatedAt=Latest",
            // "work_list_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work-list-page/secret-alchemist/hero.jpg?updatedAt=Latest",
            "page-url": WORK_URL_PREFIX +"/titan/",
            "work_list_page": listPageData[BRANDS["titan"]]
        },
        {
            "id":2,
            "brand": BRANDS["the_face_shop"],
            "category": "Beauty & Personal Care",
            "timeline": "On-Going Since 2023",
            "tasks": "Product Promotion Ad Design",
            "work_page_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/the-face-shop.jpg?updatedAt=Latest",
            "work_list_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/the-face-shop.jpg?updatedAt=Latest",
            "page-url": WORK_URL_PREFIX +"/the-face-shop/",
            "work_list_page": listPageData[BRANDS["the_face_shop"]]
        },
        {
            "id":3,
            "brand": BRANDS["secret_alchemist"],
            "category": "Beauty & Personal Care",
            "timeline": "On-Going Since 2023",
            "tasks": "Ad Design & Social Media Design",
            "work_page_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/secret-alchemist.jpg?updatedAt=Latest",
            "work_list_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work-list-page/secret-alchemist/hero.jpg?updatedAt=Latest",
            "page-url": WORK_URL_PREFIX +"/secret-alchemist/",
            "work_list_page": listPageData[BRANDS["secret_alchemist"]]
        },
        {
            "id":4,
            "brand": BRANDS["zeme_fresh"],
            "category": "Beauty & Personal Care",
            "timeline": "On-Going Since 2023",
            "tasks": "Product Promotion Ad Design",
            "work_page_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/zeme-fresh.jpg?updatedAt=Latest",
            "work_list_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work-list-page/zeme-fresh/hero.jpg?updatedAt=Latest",
            "page-url": WORK_URL_PREFIX +"/zeme-fresh/",
            "work_list_page": listPageData[BRANDS["zeme_fresh"]]
        },
        {
            "id":5,
            "brand": BRANDS["the_pink_foundry"],
            "category": "Beauty & Personal Care",
            "timeline": "On-Going Since 2023",
            "tasks": "Product Promotion Ad Design",
            "work_page_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/the-pink-foundry.jpg?updatedAt=Latest",
            "work_list_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work-list-page/the-pink-foundry/hero.jpg?updatedAt=Latest",
            "page-url": WORK_URL_PREFIX +"/the-pink-foundry/",
            "work_list_page": listPageData[BRANDS["the_pink_foundry"]]
        },
        {
            "id":6,
            "brand": BRANDS["asa_beauty"],
            "category": "Beauty & Personal Care",
            "timeline": "On-Going Since 2023",
            "tasks": "Product Promotion Ad Design",
            "work_page_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/asa-beauty.jpg?updatedAt=Latest",
            "work_list_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/asa-beauty.jpg?updatedAt=Latest",
            "page-url": WORK_URL_PREFIX +"/asa-beauty/",
            "work_list_page": listPageData[BRANDS["asa_beauty"]]
        },
        {
            "id":7,
            "brand": BRANDS["vyb_by_fastrack"],
            "category": "Accessories",
            "timeline": "On-Going Since 2023",
            "tasks": "Product Promotion Ad Design",
            "work_page_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/vyb-by-fastrack.jpg?updatedAt=Latest",
            "work_list_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work-list-page/vyb-by-fastrack/hero.jpg?updatedAt=Latest",
            "page-url": WORK_URL_PREFIX +"/vyb-by-fastrack/",
            "work_list_page": listPageData[BRANDS["vyb_by_fastrack"]]
        },
        {
            "id":8,
            "brand": BRANDS["ira_soles"],
            "category": "Accessories",
            "timeline": "On-Going Since 2023",
            "tasks": "Product Promotion Ad Design",
            "work_page_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/ira-soles.jpg?updatedAt=Latest",
            "work_list_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work-list-page/ira-soles/hero.jpg?updatedAt=Latest",
            "page-url": WORK_URL_PREFIX +"/ira-soles/",
            "work_list_page": listPageData[BRANDS["ira_soles"]]
        },
        {
            "id":9,
            "brand": BRANDS["see_love"],
            "category": "Beauty & Personal Care",
            "timeline": "On-Going Since 2023",
            "tasks": "Product Promotion Ad Design",
            "work_page_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/see-love.jpg?updatedAt=Latest",
            "work_list_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work-list-page/see-love/hero.jpg?updatedAt=Latest",
            "page-url": WORK_URL_PREFIX +"/see-love/",
            "work_list_page": listPageData[BRANDS["see_love"]]
        },
        {
            "id":10,
            "brand": BRANDS["label_society"],
            "category": "Clothing",
            "timeline": "On-Going Since 2023",
            "tasks": "Product Promotion Ad Design",
            "work_page_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/label-society.jpg?updatedAt=Latest",
            "work_list_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/label-society.jpg?updatedAt=Latest",
            "page-url": WORK_URL_PREFIX +"/label-society/",
            "work_list_page": listPageData[BRANDS["label_society"]]
        },
        {
            "id":11,
            "brand": BRANDS["cerys_skintials"],
            "category": "Beauty & Personal Care",
            "timeline": "On-Going Since 2023",
            "tasks": "Product Promotion Ad Design",
            "work_page_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/cerys-skintials.jpg?updatedAt=Latest",
            "work_list_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/cerys-skintials.jpg?updatedAt=Latest",
            "page-url": WORK_URL_PREFIX +"/cerys-skintials/",
            "work_list_page": listPageData[BRANDS["cerys_skintials"]]
        },
        {
            "id":12,
            "brand": BRANDS["shipyaari"],
            "category": "Logistics",
            "timeline": "On-Going Since 2023",
            "tasks": "Product Promotion Ad Design",
            "work_page_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/shipyaari.jpg?updatedAt=Latest",
            "work_list_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/shipyaari.jpg?updatedAt=Latest",
            "page-url": WORK_URL_PREFIX +"/shipyaari/",
            "work_list_page": listPageData[BRANDS["shipyaari"]]
        },
        {
            "id":13,
            "brand": BRANDS["fuelled"],
            "category": "Food & Beverage",
            "timeline": "On-Going Since 2023",
            "tasks": "Product Promotion Ad Design",
            "work_page_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/fuelled.jpg?updatedAt=Latest",
            "work_list_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/fuelled.jpg?updatedAt=Latest",
            "page-url": WORK_URL_PREFIX +"/fuelled/",
            "work_list_page": listPageData[BRANDS["fuelled"]]
        },
        {
            "id":14,
            "brand": BRANDS["spirit_animal"],
            "category": "Clothing",
            "timeline": "On-Going Since 2023",
            "tasks": "Product Promotion Ad Design",
            "work_page_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/spirit-animal.jpg?updatedAt=Latest",
            "work_list_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/spirit-animal.jpg?updatedAt=Latest",
            "page-url": WORK_URL_PREFIX +"/spirit-animal/",
            "work_list_page": listPageData[BRANDS["spirit_animal"]]
        },
        {
            "id":15,
            "brand": BRANDS["acfs_logistics"],
            "category": "Logistics",
            "timeline": "On-Going Since 2023",
            "tasks": "Product Promotion Ad Design",
            "work_page_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/acfs-logistics.jpg?updatedAt=Latest",
            "work_list_hero_img_url": "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work/acfs-logistics.jpg?updatedAt=Latest",
            "page-url": WORK_URL_PREFIX +"/acfs-logistics/",
            "work_list_page": listPageData[BRANDS["acfs_logistics"]]
        }
    ]
};

let getWorkBrandData =(brnd)=>{
    return data.work.find(item => item.brand === BRANDS[brnd]);
};
export { data, getWorkBrandData };
