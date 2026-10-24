import React from 'react';
import routes from '../data/routes.json';
import {MotionPage} from '../motion/MotionPage';
const pages=import.meta.glob('../pages/*.jsx');
const motions=import.meta.glob('../data/motion-pages/*.json');
const cache=new Map();
export function loadRoute(path){
 if(cache.has(path))return cache.get(path);
 const route=routes.find(r=>r.path===path);if(!route)return Promise.reject(new Error('Unknown route'));
 const promise=Promise.all([pages['../pages/'+route.file](),motions['../data/motion-pages/'+route.wfPage+'.json']()]).then(([page,motion])=>{const Page=page.default;return {default:()=> <MotionPage pageId={route.wfPage} config={motion.default}><Page/></MotionPage>}}).catch(error=>{cache.delete(path);throw error});
 cache.set(path,promise);return promise;
}
export function preloadRoute(href){const path=href?.split(/[?#]/)[0];if(routes.some(r=>r.path===path))loadRoute(path).catch(()=>{});}
