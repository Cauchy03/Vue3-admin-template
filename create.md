```
npm create vue@latest
可以自己选择是否安装ts pinia router...
需要自己配置一下 tsconfig.json
```

```json
//tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    /* Bundler mode */
    "moduleResolution": "node",
    // "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [
    {
      "path": "./tsconfig.node.json"
    }
  ]
}
```

```
npm create vite@latest
不需配置tconfig.json 但需自己安装依赖
```

```
vue3+pinia 打包报错 RollupError: "hasInjectionContext"

将 vue 升级到 3.3 及以上版本，将 pinia 升级到 2.1.0 及以上版本。Vue 3.3 引入了很多新的特性，特别是对泛型组件的支持。
如果无法升级到 Vue 3.3 及以上版本，可以锁定 Pinia 的版本为 2.0.36。由于某些原因，我们的项目无法升级 Vue，因此采用了这种方法。
```

**可以将 env.d.ts 文件放到 src 目录下**，无需再做别的配置，ts 就会引入这个文件

如果放到别的地方，比如根目录，就需要调整 tsconfig.json 的配置

```
{
  "compilerOptions": {
    "types": ["./env"]
  }
}
```
