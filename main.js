const btnGo = document.getElementById('btn-go');
const image = document.getElementById('fotopokemon');
const nome = document.getElementById('nomepoke');
const id = document.getElementById('idpesquisa');
const tipo1 = document.getElementById('tipo1');
const tipo2 = document.getElementById('tipo2');
const tipo1Image = document.getElementById('tipo1Image');
const tipo2Image = document.getElementById('tipo2Image');
const idpokemon = document.getElementById('idpokemon');
const hppoke = document.getElementById('hp_poke');
const attackpoke = document.getElementById('attack_poke');
const defense = document.getElementById('defense_poke');
const specialattack = document.getElementById('special_attack_poke');
const specialdefense = document.getElementById('special_defense_poke')
const speed = document.getElementById('speed')
const weight = document.getElementById('weight')
const quilos = document.getElementById('quilos')
const infos = document.getElementById('infos');
const barrahp = document.querySelector(".barraHp div")
const barraattack = document.querySelector(".barraAttack div")
const barradefense = document.querySelector(".barraDefense div")
const barraspecialattack = document.querySelector(".barraSpecialAttack div")
const barraspecialdefense = document.querySelector(".barraSpecialDefense div")
const barraspeed = document.querySelector(".barraSpeed div")

const fetchApi = (value) => {
    const result = fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
    .then(response => response.json())
    .then(data => {
        return data;
    });
    return result;
}

const tipos_link = new Map();
tipos_link.set(0 ,'https://i.postimg.cc/5t3TNMPC/Grass-icon-Sw-Sh.png')
tipos_link.set(1, 'https://i.postimg.cc/BbdwwZvd/Fire-icon-Sw-Sh.png')
tipos_link.set(2, 'https://i.postimg.cc/QCPRGkfY/Poison-icon-Sw-Sh.png')
tipos_link.set(3 ,'https://i.postimg.cc/qRvYNZYZ/Flying-icon-Sw-Sh.png')
tipos_link.set(4 ,'https://i.postimg.cc/Hx6q3CXg/Water-icon-Sw-Sh.png')
tipos_link.set(5 ,'https://i.postimg.cc/PxV7YQnf/Fighting-icon-Sw-Sh.png')
tipos_link.set(6 ,'https://i.postimg.cc/pXFS5jGx/Electric-icon-Sw-Sh.png')
tipos_link.set(7 ,'https://i.postimg.cc/pLK34jzk/Ground-icon-Sw-Sh.png')
tipos_link.set(8 ,'https://i.postimg.cc/mZ5xHBT3/Rock-icon-Sw-Sh.png')
tipos_link.set(9 ,'https://i.postimg.cc/5NhZsgY6/Psychic-icon-Sw-Sh.png')
tipos_link.set(10 ,'https://i.postimg.cc/CKY9gK40/Ice-icon-Sw-Sh.png')
tipos_link.set(11 ,'https://i.postimg.cc/d0qNfxqt/bug-icon-Sw-Sh.png')
tipos_link.set(12 ,'https://i.postimg.cc/L5qbTgmt/Ghost-icon-Sw-Sh.png')
tipos_link.set(13 ,'https://i.postimg.cc/gjrfTBH6/Steel-icon-Sw-Sh.png')
tipos_link.set(14 ,'https://i.postimg.cc/htR5LG6m/Dragon-icon-Sw-Sh.png')
tipos_link.set(15 ,'https://i.postimg.cc/Nj8Ppcvz/Dark-icon-Sw-Sh.png')
tipos_link.set(16 ,'https://i.postimg.cc/DfDDz6cB/Fairy-icon-Sw-Sh.png')
tipos_link.set(17 ,'https://i.postimg.cc/CLB3CXK3/Normal-icon-Sw-Sh.png')


const el = tipo2Image;
const el0 = tipo1Image;
const el1 = document.getElementById('idpoke');
const el2 = document.getElementById('nomepokemon');
const el3 = document.getElementById('tipopoke');
const el4 = document.getElementById('fotopokemon');
const el6 = document.getElementById('hp');
const el7 = document.getElementById('attack');
const el8 = document.getElementById('defense');
const el9 = document.getElementById('specialattack');
const el10 = document.getElementById('specialdefense');
const el11 = document.getElementById('speed0');
const el12 = document.getElementById('weight0');
const el13 = document.getElementById('quilos');
const el14 = document.getElementById('status');

const els = new Map();
els.set(1,el0)
els.set(2,el1)
els.set(3,el2)
els.set(4,el6)
els.set(5,el7)
els.set(6,el8)
els.set(7,el9)
els.set(8,el10)
els.set(9,el14)
els.set(10,el4)
els.set(11,el3)
els.set(12,el11)
els.set(13,el12)
els.set(14,el)

    let j = 1
    for (var i = 1 ; i < 15 ; i++){
        els.get(j).classList.add('hidden')
        j = j+1
    }

        infos.style.display='none';
const tipos = ['grass' , 'fire' , 'poison' , 'flying' , 'water' , 'fighting' , 'electric' , 'ground' , 'rock' , 'psychic',
'ice' , 'bug' , 'ghost' , 'steel' , 'dragon' , 'dark' , 'fairy' , 'normal'];


btnGo.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await fetchApi(id.value);

    let j = 1
    for (var i = 1 ; i < 14 ; i++){
        els.get(j).classList.remove('hidden')
        j = j+1
    }
    infos.style.display='flex';

    let content;
    content = result.name
    content = content.charAt(0).toUpperCase() + content.slice(1);
    nome.textContent = content
    image.src = result.sprites.front_default
    idpokemon.textContent = result.id   
    var kg;
    kg = result.weight / 2.2046
    kg = kg.toFixed(2);
    quilos.textContent = kg

    content = result.types[0].type.name
    content = content.charAt(0).toUpperCase() + content.slice(1);
    tipo1.textContent = content
    hppoke.textContent = result.stats[0].base_stat
    attackpoke.textContent = result.stats[1].base_stat
    defense.textContent = result.stats[2].base_stat
    specialattack.textContent = result.stats[3].base_stat
    specialdefense.textContent = result.stats[4].base_stat
    speed.textContent = result.stats[5].base_stat
    weight.textContent = result.weight

    if (hppoke.textContent > 100){
        barrahp.setAttribute("style","width: 100%");
    }else{
        barrahp.setAttribute("style","width: "+ hppoke.textContent+"%");
    }

    if (attackpoke.textContent > 100){
        barraattack.setAttribute("style","width: 100%");
    }else{
        barraattack.setAttribute("style","width: "+ attackpoke.textContent+"%");
    }
    
    if (defense.textContent > 100){
        barradefense.setAttribute("style","width: 100%");
    }else {
        barradefense.setAttribute("style","width: "+ defense.textContent+"%");
    }
    
    if (specialattack.textContent > 100){
        barraspecialattack.setAttribute("style","width: 100%");
    }else{
        barraspecialattack.setAttribute("style","width: "+ specialattack.textContent+"%");
    }
    
    if (specialdefense.textContent > 100){
        barraspecialdefense.setAttribute("style","width: 100%");
    }else{
        barraspecialdefense.setAttribute("style","width: "+ specialdefense.textContent+"%");
    }
   
    if (speed.textContent > 100){
        barraspeed.setAttribute("style","width: 100%");
    }else{
        barraspeed.setAttribute("style","width: "+ speed.textContent+"%");
    }
   
    
    if (result.types.length < 2){
        tipo2.textContent = ''
        el.classList.add('hidden')
    }else{
        let content;
        content = result.types[1].type.name
        content = content.charAt(0).toUpperCase() + content.slice(1);
        tipo2.textContent = content    
        el.classList.remove('hidden')
    }

        for (i = 0; i < 18; i++){
            if(result.types[0].type.name == tipos[i]){
                setTimeout(1000);
                tipo1Image.src = tipos_link.get(i)
            }
        }
    
    if (tipo2.textContent == ''){
        tipo2Image.src = ''
    }else {
        for (var i = 1; i < 18; i++){
            if(result.types[1].type.name == tipos[i]){
                setTimeout(1000);
                tipo2Image.src = tipos_link.get(i)
            }
        }
    }
})
