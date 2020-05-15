---
title: 'Como lidar com SEO no React?'
date: '2020-05-12 22:15:00'
---

Esses dias eu estava pensando em como lidar com SEO em sites feitos com React. Você provavelmente sabe o que é SEO, mas em todo caso segue uma definição: 

*SEO (Search Engine Optimization) é definido como um conjunto de estratégias e técnicas com o objetivo de potencializar e melhorar o posicionamento de um site nos resultados de busca do Google e outros buscadores, conquistando mais visitantes e consequentemente mais conversões.*

Resumindo, você quer que seu site seja encontrado nos resultados das buscas e para isso existem alguns pontos a serem considerados.<br><br>

# Entendendo o problema
Ao criar as interfaces utilizando o React, todo o HTML será gerado através do JavaScript, então até que a página seja carregada, não existe nenhum conteúdo HTML renderizado para que seja indexado pelos mecanismos de busca.

Depois de procurar por algumas soluções, encontrei duas maneiras que achei útil compartilhar.<br><br>

# React Helmet
Esse pacote disponível no npm permite que a tag head seja adicionada nas páginas, sendo assim é possível configurar as tags importantes para SEO nos seus componentes. Além disso é super simples de implementar.

Aqui está um exemplo de como funciona:<br>

![Code example](/images/code-example1.png)

É só importar o componente Helmet do pacote react-helmet e colocar as tags que você precisar dentro em cada página que você quiser.

Para ver mais sobre o React Helmet, aqui vai o link do [GitHub](https://github.com/nfl/react-helmet).<br><br>

# NextJS

Se o SEO é algo crucial no seu site, como um ecommerce ou um blog por exemplo, então talvez você deva considerar o uso do NextJS que nada mais é do que um framework que nos permite desenvolver aplicações web estáticas utilizando React, porém no lado do servidor, conhecido como SSR (server-side rendering). 

Com esse processo de SSR, o Node faz a renderização do HTML antes da requisição chegar, então todo o conteúdo HTML está pronto para ser exibido.<br><br>

### Pincelando um pouco do NextJS

Dentro de cada página nós podemos utilizar componentes que já vem no core do Next como por exemplo o componente Head.
Ele funciona exatamente como a tag head do HTML e vai nos permitir setar as tags referentes ao SEO.

Aqui um exemplo de uma página no NextJS:

![Code example](/images/code-example2.png)

Como já comentei acima, o que difere esse framework do React é a capacidade de gerar páginas estáticas e também utilizar a renderização no lado do servidor, elas funcionam da seguinte maneira:

- **Static Generation:** quando o HTML é gerado no momento do build e as páginas estáticas que foram criadas são reutilizadas em cada requisição.
- **Server-side Rendering (SSR):** quando o HTML é gerado em cada requisição.

Mas quando utilizar cada uma dessas duas renderizações?

Para páginas estáticas, onde o conteúdo pode ser renderizado antes de um requisição do usuário você deve utilizar a geração estática. Agora se você precisa mostrar conteúdos frequentemente atualizados você deve usar SSR.

Você também pode definir qual deles usar em cada página do seu site, e quando isso é feito temos o que é chamado de aplicação híbrida.

Se você quer ler mais sobre o Next, aqui está o [link](https://nextjs.org/) da documentação.<br><br>

E concluindo, se você usar uma dessas opções você certamente terá um bom resultado em termos de SEO para o seu site.