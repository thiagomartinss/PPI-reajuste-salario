import express from "express";

const porta = 3000;
const host = "0.0.0.0";
const app = express();

app.use(express.urlencoded({extend: true}));

app.get("/", (requisicao,resposta) =>{
    let mensagem = "";
    let idade = Number(requisicao.query.idade);
    let sexo =  requisicao.query.sexo?.toUpperCase();
    let salario_base = Number(requisicao.query.salario_base);
    let anoContratacao = Number(requisicao.query.anoContratacao);
    const currentYear = new Date().getFullYear();
    let matricula = Number(requisicao.query.matricula);
    let tempoTrabalho = currentYear - anoContratacao;
    let salarioReajustado = 0;
    let reajuste = 0;
    let texto = "";
    
    if(isNaN(idade) || idade < 16){
        mensagem = "<p style='color: red; font-size: 2em;'>Insira um número válido e idade deve ser maior de 16 anos!!</p>";
    } else  if(idade >= 18 && idade <= 39){
        switch(sexo){
            case "M":
                if(isNaN(salario_base) || salario_base <= 0){
                    mensagem = "<p style='color: red; font-size: 2em;'>Insira um número válido para o salário base!!</p>";
                }else if(isNaN(anoContratacao) || !Number.isInteger(anoContratacao) || anoContratacao <= 1960 || anoContratacao >= currentYear){
                    mensagem = "<p style='color: red; font-size: 2em;'>Insira um número válido para o ano de contratação, deve ser maior que 1960 e menor que o ano atual!!</p>";
                } else if(isNaN(matricula) || matricula <= 0){
                    mensagem = "<p style='color: red; font-size: 2em;'>Insira um número válido para a matrícula!!</p>";
                } else{
                    reajuste = 10;
                    salarioReajustado = salario_base + (salario_base * (reajuste / 100));
                    if(tempoTrabalho <= 10){
                        salarioReajustado -= 10;
                        texto = "Foi aplicado um desconto de R$10,00";
                    }
                    if(tempoTrabalho > 10){
                        salarioReajustado += 17;
                        texto = "Foi aplicado um acrescimo de R$17,00";
                    }

                    mensagem = `<p style="color: blue; font-size: 2em;">O funcionário da matricula ${matricula} com idade de ${idade} anos 
                                e sexo ${sexo} contém um reajuste de ${reajuste}% e com ${tempoTrabalho} anos de empresa.
                                ${texto}. <br><br>O salario R$${salario_base} será reajustado para R$${salarioReajustado}.</p>`;
                }
                break;
            case "F":
                if(isNaN(salario_base) || salario_base <= 0){
                    mensagem = "<p style='color: red; font-size: 2em;'>Insira um número válido para o salário base!!</p>";
                }else if(isNaN(anoContratacao) || !Number.isInteger(anoContratacao) || anoContratacao <= 1960 || anoContratacao >= currentYear){
                    mensagem = "<p style='color: red; font-size: 2em;'>Insira um número válido para o ano de contratação, deve ser maior que 1960 e menor que o ano atual!!</p>";
                } else if(isNaN(matricula) || matricula <= 0){
                    mensagem = "<p style='color: red; font-size: 2em;'>Insira um número válido para a matrícula!!</p>";
                } else{
                    reajuste = 8;
                    salarioReajustado = salario_base + (salario_base * (reajuste / 100));
                    if(tempoTrabalho <= 10){
                        salarioReajustado -= 11;
                        texto = "Foi aplicado um desconto de R$11,00";
                    }
                    if(tempoTrabalho > 10){
                        salarioReajustado += 16;
                        texto = "Foi aplicado um acrescimo de R$16,00";
                    }

                    mensagem = `<p style="color: blue; font-size: 2em;">O funcionário da matricula ${matricula} com idade de ${idade} anos 
                                e sexo ${sexo} contém um reajuste de ${reajuste}% e com ${tempoTrabalho} anos de empresa.
                                ${texto}. <br><br>O salario R$${salario_base} será reajustado para R$${salarioReajustado}.</p>`;
                }
                break;
            default:
                mensagem = "<p style='color: red; font-size: 2em;'>Sexo inválido, favor inserir M ou F</p>";
        }
    } else if(idade >= 40 && idade <= 69){
        switch(sexo){
            case "M":
                if(isNaN(salario_base) || salario_base <= 0){
                    mensagem = "<p style='color: red; font-size: 2em;'>Insira um número válido para o salário base!!</p>";
                }else if(isNaN(anoContratacao) || !Number.isInteger(anoContratacao) || anoContratacao <= 1960 || anoContratacao >= currentYear){
                    mensagem = "<p style='color: red; font-size: 2em;'>Insira um número válido para o ano de contratação, deve ser maior que 1960 e menor que o ano atual!!</p>";
                } else if(isNaN(matricula) || matricula <= 0){
                    mensagem = "<p style='color: red; font-size: 2em;'>Insira um número válido para a matrícula!!</p>";
                } else{
                    reajuste = 8;
                    salarioReajustado = salario_base + (salario_base * (reajuste / 100));
                    if(tempoTrabalho <= 10){
                        salarioReajustado -= 5;
                        texto = "Foi aplicado um desconto de R$5,00";
                    }
                    if(tempoTrabalho > 10){
                        salarioReajustado += 15;
                        texto = "Foi aplicado um acrescimo de R$15,00";
                    }

                    mensagem = `<p style="color: blue; font-size: 2em;">O funcionário da matricula ${matricula} com idade de ${idade} anos 
                                e sexo ${sexo} contém um reajuste de ${reajuste}% e com ${tempoTrabalho} anos de empresa.
                                ${texto}. <br><br>O salario R$${salario_base} será reajustado para R$${salarioReajustado}.</p>`;
                }
                break;
            case "F":
                if(isNaN(salario_base) || salario_base <= 0){
                    mensagem = "<p style='color: red; font-size: 2em;'>Insira um número válido para o salário base!!</p>";
                }else if(isNaN(anoContratacao) || !Number.isInteger(anoContratacao) || anoContratacao <= 1960 || anoContratacao >= currentYear){
                    mensagem = "<p style='color: red; font-size: 2em;'>Insira um número válido para o ano de contratação, deve ser maior que 1960 e menor que o ano atual!!</p>";
                } else if(isNaN(matricula) || matricula <= 0){
                    mensagem = "<p style='color: red; font-size: 2em;'>Insira um número válido para a matrícula!!</p>";
                } else{
                    reajuste = 10;
                    salarioReajustado = salario_base + (salario_base * (reajuste / 100));
                    if(tempoTrabalho <= 10){
                        salarioReajustado -= 7;
                        texto = "Foi aplicado um desconto de R$7,00";
                    }
                    if(tempoTrabalho > 10){
                        salarioReajustado += 17;
                        texto = "Foi aplicado um acrescimo de R$14,00";
                    }

                    mensagem = `<p style="color: blue; font-size: 2em;">O funcionário da matricula ${matricula} com idade de ${idade} anos 
                                e sexo ${sexo} contém um reajuste de ${reajuste}% e com ${tempoTrabalho} anos de empresa.
                                ${texto}. <br><br>O salario R$${salario_base} será reajustado para R$${salarioReajustado}.</p>`;
                }
                break;
            default:
                mensagem = "Sexo inválido, favor inserir M ou F";
        }
    } else if(idade >= 70 && idade <= 99){
        switch(sexo){
            case "M":
                if(isNaN(salario_base) || salario_base <= 0){
                    mensagem = "<p style='color: red; font-size: 2em;'>Insira um número válido para o salário base!!</p>";
                }else if(isNaN(anoContratacao) || !Number.isInteger(anoContratacao) || anoContratacao <= 1960 || anoContratacao >= currentYear){
                    mensagem = "<p style='color: red; font-size: 2em;'>Insira um número válido para o ano de contratação, deve ser maior que 1960 e menor que o ano atual!!</p>";
                } else if(isNaN(matricula) || matricula <= 0){
                    mensagem = "<p style='color: red; font-size: 2em;'>Insira um número válido para a matrícula!!</p>";
                } else{
                    reajuste = 15;
                    salarioReajustado = salario_base + (salario_base * (reajuste / 100));
                    if(tempoTrabalho <= 10){
                        salarioReajustado -= 15;
                        texto = "Foi aplicado um desconto de R$15,00";
                    }
                    if(tempoTrabalho > 10){
                        salarioReajustado += 13;
                        texto = "Foi aplicado um acrescimo de R$13,00";
                    }

                    mensagem = `<p style="color: blue; font-size: 2em;">O funcionário da matricula ${matricula} com idade de ${idade} anos 
                                e sexo ${sexo} contém um reajuste de ${reajuste}% e com ${tempoTrabalho} anos de empresa.
                                ${texto}. <br><br>O salario R$${salario_base} será reajustado para R$${salarioReajustado}.</p>`;
                }
                break;
            case "F":
                if(isNaN(salario_base) || salario_base <= 0){
                    mensagem = "<p style='color: red; font-size: 2em;'>Insira um número válido para o salário base!!</p>";
                }else if(isNaN(anoContratacao) || !Number.isInteger(anoContratacao) || anoContratacao <= 1960 || anoContratacao >= currentYear){
                    mensagem = "<p style='color: red; font-size: 2em;'>Insira um número válido para o ano de contratação, deve ser maior que 1960 e menor que o ano atual!!</p>";
                } else if(isNaN(matricula) || matricula <= 0){
                    mensagem = "<p style='color: red; font-size: 2em;'>Insira um número válido para a matrícula!!</p>";
                } else{
                    reajuste = 17;
                    salarioReajustado = salario_base + (salario_base * (reajuste / 100));
                    if(tempoTrabalho <= 10){
                        salarioReajustado -= 17;
                        texto = "Foi aplicado um desconto de R$17,00";
                    }
                    if(tempoTrabalho > 10){
                        salarioReajustado += 12;
                        texto = "Foi aplicado um acrescimo de R$12,00";
                    }

                    mensagem = `<p style="color: blue; font-size: 2em;">O funcionário da matricula ${matricula} com idade de ${idade} anos 
                                e sexo ${sexo} contém um reajuste de ${reajuste}% e com ${tempoTrabalho} anos de empresa.
                                ${texto}. <br><br>O salario R$${salario_base} será reajustado para R$${salarioReajustado}.</p>`;
                }
                break;
            default:
                mensagem = "Sexo inválido, favor inserir M ou F";
        }
    }

    resposta.send(`
                    <html>
                        <head>
                            <title>Reajuste salário</title>
                        </head>
                        <body>
                            <h1>Bem-vindo ao site de cálculo de reajuste de salário</h1>
                            <h3>Siga as instruções abaixo para realizar o cálculo!</h3>
                            <p>Para realizar o cálculo, você deve adicionar os dados na url da página web do navegador, no seguinte formato:</p>
                            <p>Para adicionar a idade basta inserir o "/?idade=suaIdade" após o localhost:3000</p>
                            <p>Exemplo: http://localhost:3000/?idade=30 - foi adicionado idade 30 anos</p>
                            <p>Para adicionar o sexo basta inserir o & após a idade</p>
                            <p>Exemplo: http://localhost:3000/?idade=30&sexo=M - foi adicionado idade 30 anos e sexo masculino</p>
                            <p>Faça isso para todas as informações abaixo, o nome do campo inserido deve ser exatamente igual</p>
                            <ul>
                                <li>idade</li>
                                <li>sexo</li>
                                <li>salario_base</li>
                                <li>anoContratacao</li>
                                <li>matricula</li>
                            </ul>
                            <p>Ao final irá ficar uma url parecida com essa:</p>
                            <p>Exemplo final: http://localhost:3000/?idade=30&sexo=M&salario_base=2500.50&anoContratacao=2012&matricula=98765</p>
                            ${mensagem}
                        </body>
                    </html>
        `);
    resposta.end();
});

app.listen(porta, host, () =>{
    console.log("Servidor rodando na porta 3000");
});