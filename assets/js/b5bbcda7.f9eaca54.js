"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[12],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9801:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={id:"classes-transformer-plugin",title:"Transformer Plugin",sidebar_label:"Transformer Plugin"},l=void 0,p={unversionedId:"plugins-system/classes-transformer-plugin",id:"plugins-system/classes-transformer-plugin",title:"Transformer Plugin",description:"@automapper/classes/experimental/transformer-plugin is part of the public API of @automapper/classes.",source:"@site/docs/plugins-system/classes-transformer-plugin.md",sourceDirName:"plugins-system",slug:"/plugins-system/classes-transformer-plugin",permalink:"/docs/plugins-system/classes-transformer-plugin",editUrl:"https://github.com/nartc/mapper/tree/main/docs-site/docs/plugins-system/classes-transformer-plugin.md",tags:[],version:"current",lastUpdatedBy:"Chau Tran",lastUpdatedAt:1641501821,formattedLastUpdatedAt:"1/6/2022",frontMatter:{id:"classes-transformer-plugin",title:"Transformer Plugin",sidebar_label:"Transformer Plugin"},sidebar:"docs",previous:{title:"Limitations",permalink:"/docs/plugins-system/classes-limitations"},next:{title:"Mapped Types",permalink:"/docs/plugins-system/classes-mapped-types"}},u=[{value:"Problem",id:"problem",children:[],level:2},{value:"How it works",id:"how-it-works",children:[],level:2},{value:"Why experimental?",id:"why-experimental",children:[],level:2},{value:"Limitations",id:"limitations",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Ignore a property",id:"ignore-a-property",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Webpack",id:"webpack",children:[],level:3},{value:"Rollup",id:"rollup",children:[],level:3},{value:"ttypescript",id:"ttypescript",children:[],level:3},{value:"NestJS CLI",id:"nestjs-cli",children:[],level:3},{value:"NestJS with Nx",id:"nestjs-with-nx",children:[{value:"Pre 12.8",id:"pre-128",children:[],level:4}],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],m={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@automapper/classes/experimental/transformer-plugin")," is part of the public API of ",(0,i.kt)("inlineCode",{parentName:"p"},"@automapper/classes"),"."),(0,i.kt)("h2",{id:"problem"},"Problem"),(0,i.kt)("p",null,"Decorating Classes' members with ",(0,i.kt)("inlineCode",{parentName:"p"},"@AutoMap()")," is verbose, even when you're being meticulous about what members are being ",(0,i.kt)("strong",{parentName:"p"},"auto-configured")," vs ",(0,i.kt)("strong",{parentName:"p"},"custom-configured"),". In some other cases, the Classes themselves are being ",(0,i.kt)("strong",{parentName:"p"},"generated"),", and/or from ",(0,i.kt)("strong",{parentName:"p"},"external libraries")," that the consumers ",(0,i.kt)("strong",{parentName:"p"},"cannot")," touch."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@automapper/classes/experimental/transformer-plugin")," is to ease this pain point when using ",(0,i.kt)("inlineCode",{parentName:"p"},"@automapper/classes")),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"Let's look at the following classes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class Profile {\n  bio: string;\n  age: number;\n}\nclass User {\n  firstName: string;\n  lastName: string;\n  profile: Profile;\n}\n")),(0,i.kt)("p",null,"Throughout the documentation, we all know that the above code will be compiled to"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class Profile {}\nclass User {}\n")),(0,i.kt)("p",null,"The requirement for ",(0,i.kt)("inlineCode",{parentName:"p"},"@automapper/classes")," to work is to decorate all the members of both classes with ",(0,i.kt)("inlineCode",{parentName:"p"},"@AutoMap")," in order for ",(0,i.kt)("inlineCode",{parentName:"p"},"@automapper/classes")," to keep track of the metadata of each class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class Profile {\n  @AutoMap()\n  bio: string;\n  @AutoMap()\n  age: number;\n}\nclass User {\n  @AutoMap()\n  firstName: string;\n  @AutoMap()\n  lastName: string;\n  @AutoMap({ typeFn: () => Profile })\n  profile: Profile;\n}\n")),(0,i.kt)("p",null,"This will get very verbose very soon."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@automapper/classes/experimental/transformer-plugin")," runs a ",(0,i.kt)("inlineCode",{parentName:"p"},"before")," transformer that affects the ",(0,i.kt)("strong",{parentName:"p"},"AST")," directly before the Compilation step."),(0,i.kt)("p",null,"The transformer will"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Look at files that end with ",(0,i.kt)("inlineCode",{parentName:"li"},".model.ts"),", ",(0,i.kt)("inlineCode",{parentName:"li"},".vm.ts"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},".dto.ts")," (this can be changed via transformer plugin options)"),(0,i.kt)("li",{parentName:"ul"},"Iterate through all the members (",(0,i.kt)("inlineCode",{parentName:"li"},"PropertyDeclaration"),") of each class (",(0,i.kt)("inlineCode",{parentName:"li"},"ClassDeclaration"),") that it finds"),(0,i.kt)("li",{parentName:"ul"},"Store the members in a list that ",(0,i.kt)("inlineCode",{parentName:"li"},"@automapper/classes")," can understand"),(0,i.kt)("li",{parentName:"ul"},"Add to each class a ",(0,i.kt)("inlineCode",{parentName:"li"},"static method")," and return the list.")),(0,i.kt)("p",null,"Let's look at the above snippet again"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// your code\nclass Profile {\n  bio: string;\n  age: number;\n}\nclass User {\n  firstName: string;\n  lastName: string;\n  profile: Profile;\n}\n\n// after \"before\" transformer runs through your code\n\nclass Profile {\n  bio: string;\n  age: number;\n\n  static __AUTOMAPPER_METADATA_FACTORY__() {\n    return [\n      ['bio', { typeFn: () => String }],\n      ['age', { typeFn: () => Number }],\n    ];\n  }\n}\nclass User {\n  firstName: string;\n  lastName: string;\n  profile: Profile;\n\n  static __AUTOMAPPER_METADATA_FACTORY__() {\n    return [\n      ['firstName', { typeFn: () => String }],\n      ['lastName', { typeFn: () => String }],\n      ['profile', { typeFn: () => Profile, depth: 0 }],\n    ];\n  }\n}\n")),(0,i.kt)("p",null,"After compilation, the members will be gone, but the static function will stay making it available to be called at runtime. Hence, the metadata will be available. ",(0,i.kt)("inlineCode",{parentName:"p"},"@automapper/classes/experimental/transformer-plugin")," only adds the minimum amount of code needed to keep track of the metadata."),(0,i.kt)("h2",{id:"why-experimental"},"Why experimental?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@automapper/classes/experimental/transformer-plugin")," utilizes ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API"},"TypeScript Compiler API")," to traverse and manipulate the ",(0,i.kt)("strong",{parentName:"p"},"Abstract Syntax Tree (AST)")," to automate the process of decorating the Classes. And, there is a ",(0,i.kt)("strong",{parentName:"p"},"Disclaimer")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Keep in mind that this is not yet a stable API - we\u2019re releasing this as version 0.5, and things will be changing over time. As a first iteration, there will be a few rough edges. We encourage any and all feedback from the community to improve the API. To allow users to transition between future releases, we will be documenting any API Breaking Changes per new release.")),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"Currently, ",(0,i.kt)("inlineCode",{parentName:"p"},"@automapper/classes/experimental/transformer-plugin")," will handle most ",(0,i.kt)("inlineCode",{parentName:"p"},"Nullable")," (",(0,i.kt)("inlineCode",{parentName:"p"},"type | null"),") and ",(0,i.kt)("inlineCode",{parentName:"p"},"Maybe")," (",(0,i.kt)("inlineCode",{parentName:"p"},"propKey?: type"),") cases. However, for complex cases where you have unions with different types (",(0,i.kt)("inlineCode",{parentName:"p"},"string | number | boolean")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ClassA | ClassB"),"), please consider decorate the property (field) manually with ",(0,i.kt)("inlineCode",{parentName:"p"},"@AutoMap()")," decorator."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"As mentioned above, this is utilizing an experimental feature of TypeScript. Hence, you need to modify the build step of your project to use ",(0,i.kt)("inlineCode",{parentName:"p"},"@automapper/classes/experimental/transformer-plugin")),(0,i.kt)("h3",{id:"ignore-a-property"},"Ignore a property"),(0,i.kt)("p",null,"The plugin will automatically construct the metadata for all properties that aren't decorated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@AutoMap"),". However, there are also cases where you neither want ",(0,i.kt)("inlineCode",{parentName:"p"},"@AutoMap")," nor having the plugin processing a property (eg: you want to take the control 100% with manual configuration). To ignore a property completely, you can use a JSDoc tag ",(0,i.kt)("inlineCode",{parentName:"p"},"@autoMapIgnore")," on a property"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class User {\n  firstName: string;\n  lastName: string;\n  profile: Profile;\n  /**\n   * @autoMapIgnore\n   */\n  ignoreMe: string;\n}\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface AutomapperTransformerPluginOptions {\n  modelFileNameSuffix?: string[];\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"modelFileNameSuffix")," is default to ",(0,i.kt)("inlineCode",{parentName:"p"},"['.model.ts', '.vm.ts', '.dto.ts']")),(0,i.kt)("h3",{id:"webpack"},"Webpack"),(0,i.kt)("p",null,"If you use ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-loader")," or some fork of ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-loader"),", you can configure Webpack config to turn on Transformers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// snip\nconst automapperTransformerPlugin = require('@automapper/classes/experimental/transformer-plugin');\nconst pluginOptions = {\n  modelFileNameSuffix: [\n    /*...*/\n  ],\n};\nmodule.exports = {\n  // snip\n  module: {\n    rules: [\n      // snip\n      {\n        test: /\\.tsx?$/,\n        loader: 'ts-loader',\n        options: {\n          getCustomTransformers: (program) => ({\n            before: [\n              automapperTransformerPlugin(program, pluginOptions).before,\n            ],\n          }),\n        },\n      },\n      // snip\n    ],\n  },\n  // snip\n};\n")),(0,i.kt)("h3",{id:"rollup"},"Rollup"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"rollup-plugin-typescript2")," as it has ",(0,i.kt)("inlineCode",{parentName:"p"},"transformers")," capability"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import automapperTransformerPlugin from '@automapper/classes/experimental/transformer-plugin';\nimport typescript from 'rollup-plugin-typescript2';\nconst pluginOptions = {\n  modelFileNameSuffix: [\n    /*...*/\n  ],\n};\nexport default {\n  // snip\n  preserveModules: true, // <-- turn on preserveModules\n  plugins: [\n    // snip\n    typescript({\n      transformers: [\n        (service) => ({\n          before: [\n            automapperTransformerPlugin(service.getProgram(), pluginOptions)\n              .before,\n          ],\n        }),\n      ],\n    }),\n    // snip\n  ],\n};\n")),(0,i.kt)("h3",{id:"ttypescript"},"ttypescript"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ttypescript")," patches ",(0,i.kt)("inlineCode",{parentName:"p"},"typescript")," in order to use transformers in ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),". See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cevek/ttypescript"},"ttypescript's README")," for how to use this with module bundlers such as webpack or Rollup."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "compilerOptions": {\n    ...,\n    "plugins": [\n        {\n            "transform": "@automapper/classes/experimental/transformer-plugin",\n            "modelFileNameSuffix": [...]\n        }\n    ],\n    ...\n  }\n}\n')),(0,i.kt)("h3",{id:"nestjs-cli"},"NestJS CLI"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"nestjs/cli")," can enable Transformers by default. To use this plugin with ",(0,i.kt)("inlineCode",{parentName:"p"},"nestjs/cli"),", modify your ",(0,i.kt)("inlineCode",{parentName:"p"},"nest-cli.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "collection": "@nestjs/schematics",\n  "sourceRoot": "src",\n  "compilerOptions": {\n    "plugins": ["@automapper/classes/experimental/transformer-plugin"]\n  }\n}\n')),(0,i.kt)("p",null,"or with options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "collection": "@nestjs/schematics",\n  "sourceRoot": "src",\n  "compilerOptions": {\n    "plugins": [\n      {\n        "name": "@automapper/classes/experimental/transformer-plugin",\n        "options": {\n          "modelFileNameSuffix": [".dto.ts", ".vm.ts"]\n        }\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h3",{id:"nestjs-with-nx"},"NestJS with Nx"),(0,i.kt)("p",null,"Nx v12.8 adds support for TypeScript Compiler plugins via an option called ",(0,i.kt)("inlineCode",{parentName:"p"},"tsPlugins")," in their ",(0,i.kt)("inlineCode",{parentName:"p"},"@nrwl/node:build")," executor, which is what ",(0,i.kt)("inlineCode",{parentName:"p"},"@nrwl/nest")," is using for building the application."),(0,i.kt)("p",null,"Read more about the usage here: ",(0,i.kt)("a",{parentName:"p",href:"https://blog.nrwl.io/micro-frontends-using-module-federation-presets-for-react-and-storybook-typescript-compiler-4120cf134816"},"Nx 12.8 Blog post")),(0,i.kt)("h4",{id:"pre-128"},"Pre 12.8"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NestJS")," in Nx workspace utilizes ",(0,i.kt)("inlineCode",{parentName:"p"},"nrwl/node:build")," executor (formerly, builder) which allows you to pass in a custom Webpack config. However, to turn on Transformer, there's still this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nrwl/nx/issues/2147"},"open issue")," in which you can find multiple solutions/workarounds as of the moment."),(0,i.kt)("h3",{id:"angular"},"Angular"),(0,i.kt)("p",null,"Angular CLI has sophisticated build process so please take a look at ",(0,i.kt)("a",{parentName:"p",href:"https://indepth.dev/posts/1045/having-fun-with-angular-and-typescript-transformers"},"this article")," and related articles mentioned to come up with your approach of turning on Transformers for Angular projects"))}c.isMDXComponent=!0}}]);