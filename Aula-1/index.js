const user = [
    {   
    "class": "Aluno",
    "nome": "william",
    "idade": 20,
    "id": 1,
    "esta_trabalhando": true,
    "hobbies": ["Programar","Jogar","fazer musica"],
    "detalhes_do_aluno":{
        "profissao": "Desenvolvedor",
        "telefone": "999999999",
        "empresa": "exemplo"
        }
    },

    {   
        "class": "Aluno",
        "nome": "Junior",
        "idade": 22,
        "id": 2,
        "esta_trabalhando": null,
        "hobbies": ["Ler","Jogar","estudar"],
        "detalhes_do_aluno":{
            "profissao": "Desenvolvedor",
            "telefone": "999999999",
            "empresa": null
            }
        }

]

//json 
// converter o objeto para json
// objeto -> json
//const json = stringfy

const jsonData = JSON.stringify(user)

console.log(jsonData)

//converter json para objeto
//json -> objeto
//const objeto = parse

const obj = JSON.parse(jsonData)

console.log(obj)