# CodeLab react JS

## **Installation**

### Pré-requis

**Tester la version de nodeJS**

```
ludovicfavreartigues@LBE-Portable:~/projets/codelab/sources$ node --version
v8.11.1
```

**Tester la version de npm**

```
ludovicfavreartigues@LBE-Portable:~/projets/codelab/sources$ npm --version
5.6.0
```

### Installation de l'utilitaire react

```
npm install -g create-react-app
```

**Test** 

```
ludovicfavreartigues@LBE-Portable:~/projets/codelab/sources$ create-react-app
Please specify the project directory:
  create-react-app <project-directory>

For example:
  create-react-app my-react-app

Run create-react-app --help to see all options.
```

## Creation de l'application de CV

```
ludovicfavreartigues@LBE-Portable:~/projets/codelab/sources$ create-react-app cv-app	

ludovicfavreartigues@LBE-Portable:~/projets/codelab/sources$ cd cv-app/
```

**On regarde les commandes de bases**

```
ludovicfavreartigues@LBE-Portable:~/projets/codelab/sources$ npm run start
ludovicfavreartigues@LBE-Portable:~/projets/codelab/sources$ npm run build
ludovicfavreartigues@LBE-Portable:~/projets/codelab/sources$ npm run test
```

**Points à expliquer**

- La structure du projet
- Le Développement par composant
- Le JSX



On est partis

Creation d'un composant 

- On fait le composant header de base

  ```
  import React   from 'react';

  import './header.css';

  class Header extends React.Component {

    render() {
      return (
        <header>
          <h1>Mon titre</h1>
        </header>
      );
    }
  }

  export default Header;

  ```

- On y ajoute un props depuis le fichier app.js

```
<Header title="Mon super CV"/> //app.js
<h1>{ this.props.title}</h1> //composant header
```

On poursuit sur la création d'une zone d'itentification qui sera notre page d'accueil. Ensuite une fera une seconde page qui affichera nos expérience

Page de profil

Création d'un composant profil qui prendra comme paramètre le data.json l'entrée identification

Dans le profil, on defini le type des propotype 

```
import PropTypes from 'prop-types';
```

```
Profil.propTypes = {  name: PropTypes.string};
```



- On créer le menu basique comme a l'ancien en <ul> <li>
- On installe le react-router

```
npm install react-router-dom
```

Cycle de vie des composant

Api Context