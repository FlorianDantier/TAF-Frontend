
### `npm start`
Lancer le projet en mode dev

### `npm test`
Lancer les tests unitaire (s'il y en a)

### `npm run build`
Faire le build de l'application

# Organisation à respecter
## Hiérarchie
├───src  
│  
├───components  
│   ├───Base  
│   │   ├───TAFButton  
│   │   │       index.tsx  
│   │   │       style.ts  
│   │   │  
│   │   └───TAFTextField  
│   │           index.tsx  
│   │           style.ts  
│   │  
│   └───Layout  
│       ├───Footer  
│       │       index.tsx  
│       │       style.ts  
│       │  
│       ├───Header  
│       │       index.tsx  
│       │       style.ts                                    
│       │       
│       └───Menu        
│               index.tsx       
│               style.ts        
│       
├───models      
│       User.ts     
│       
├───pages       
│   ├───HomePage        
│   │       index.tsx       
│   │       style.ts        
│   │       
│   └───NotFoundPage        
│           index.tsx       
│           style.ts        
│       
├───router      
│       router.tsx      
│       
├───store       
│   │   hook.ts     
│   │   store.ts        
│   │       
│   ├───actions     
│   │       presence.action.ts      
│   │       
│   ├───middleware      
│   ├───reducers        
│   │       index.ts        
│   │       presence.reducer.ts     
│   │       
│   ├───selectors       
│   │       presence.selector.ts        
│   │       
│   └───states      
│           presence.state.ts       
│       
├───styles      
│       layout.ts       
│       
└───utils       
Loadable.ts     
        
        