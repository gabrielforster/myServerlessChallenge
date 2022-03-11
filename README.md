<h1 align='center'>myAPIServerlessChallenge</h1>

## Descrição
Desafio de criar uma API Serverless que retor a próxima data considerada palíndromo

## Tecnologias
Para a criação dessa API, foram utilizadas as seguintes tencologias:
 - [nodeJS] (https://nodejs.org/)
 - Framework [Serverless] (https://www.serverless.com/)
 - Provedor [AWS] (https://aws.amazon.com/pt/free/)
 -  Serviços da AWS: API Gateway e Lambda

## Como usar
A request à API deve ser realizado contendo um <a href='#"ID"'>"id"</a> da data,
no final do endpoint -> https://6tplelga2g.execute-api.us-east-1.amazonaws.com/dev/get-user/IDdaDataAqui

## ID da data
O que seria o id da data?
Bom, o id da data nada mais é que uma formatação dos valores presentes na data (dia, mês e ano).

<h3>Como saber o id da minha data?</h3>
Simples. O id da sua data deve ter a seguite estrutura ano+mes+dia
<br>
-> Por exemplo a data 11 de março de 2022(11/03/2022)<br>
O id dessa data em questão seria _20220311_ - **2022(ano)+03(mês)+11(dia)**
