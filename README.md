
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
├───components  (tous les composants UI servant à toute l'application)  
│   ├───Base  
│   │   ├───TAFButton  
│   │   │       index.tsx  
│   │   │       style.ts  
│   │   │  
│   │   └───TAFTextField  
│   │           index.tsx  
│   │           style.ts  
│   │  
│   └───Layout  (Tous les composants/partie de vue liées au layout)  
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
├───models  (Les modèles de l'application)  
│       User.ts     
│       
├───pages (Les différentes pages de l'app)     
│   ├───HomePage        
│   │       index.tsx       
│   │       style.ts        
│   │       
│   └───NotFoundPage        
│           index.tsx       
│           style.ts        
│       
├───router (config du routeur, c'est ici où on déclare les routes)       
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
├───styles (style global de l'application, n'iront pas ici les styles propre à un composant ou a une page)     
│       layout.ts       
│       
└───utils      
Loadable.ts     
        
De manière générale, chaque composants/vues aura un dossier qui lui sera propre.  
Ce dossier contiendra :
* Un fichier index.tsx qui sera là ou sera déclaré le composant
* Un fichier style.ts qui contiendra les styles nécessaire à la vue/composant. 

