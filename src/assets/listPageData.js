import { BRANDS } from '@/assets/brandNameConst';
import { convertToObject } from '@/assets/utils.js';

const listPageData = {
    [BRANDS["titan"]]: (() => {
        return convertToObject([
            ["1", "m", "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work-list-page/titan/1.mp4?updatedAt=Latest"],
            ["2", "ss", "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work-list-page/titan/2.mp4?updatedAt=Latest"],
            ["3", "ss", "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work-list-page/titan/3.jpg?updatedAt=Latest"],
            ["4", "sm", "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work-list-page/titan/4.mp4?updatedAt=Latest"],
            ["5", "sm", "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work-list-page/titan/5.mp4?updatedAt=Latest"],
            ["6", "m", "https://ik.imagekit.io/cjciua4b58/hue-and-tint-studio/work-list-page/titan/6.mp4?updatedAt=Latest"],
        ]);
    })()
};

export { listPageData };
