/*variables*/{
    var all_units={
        names:["ТГ-5"   ,"КВ-2"  ,"ЗиС-41","СУ-14-1"],
        size: ["6x10"   ,"3x4"   ,"2x3"   ,"2x4"    ],
        dmg:  ["55"     ,"170"   ,"90"    ,"110"    ],
        hp:   ["270"    ,"80"    ,"20"    ,"45"     ],
        dv:   ["4"      ,"2"     ,"7"     ,"5"      ],
        da:   ["2-7,3"  ,"1-12,5","1-25,3",""],
        buy:  ["200"    ,"150"   ,"100"   ,""],
        rev:  ["160"    ,"95"    ,"80"    ,""],
        src:  ["тг5"    ,"кв-2"  ,"zis-30",""]
    }
}

/*functions*/{
    /*function shf_data(type) {
        if (type==true) {
            var text_return='';
            text_return+=input_1.value+"|"+input_2.value+"|"+input_3.value+"|"
            return text_return;
        } else {
            
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                
            }
            var poisk={
                money:
            }
        }
        
    }*/
    function find_units() {
        result_list.innerHTML=""
        var money=Infinity;
        var dmg_min=0;
        var hp_min =0;
        {
            var found_units=0;
        }
        {
            if(input_1.value!=""){
                money=input_1.value-0
            }
            if(input_2.value!=""){
                dmg_min=input_2.value-0
            }
            if(input_3.value!=""){
                hp_min=input_3.value-0
            }

        }
        for (let index = 0; index < all_units.names.length; index++) {
            var money_good=all_units.buy[index]<=money;
            var dmg_good=all_units.dmg[index]>=dmg_min;
            var hp_good=all_units.hp[index]>=hp_min;
            
            if (money_good==true && dmg_good==true && hp_good==true) {
                found_units+=1;
                result_list.innerHTML+=`
                <div class="result_div">
                    <img src="../${all_units.src[index]}.jpg" alt="" class="result_img">
                    <table class="result_table">
                        <tr>
                            <td>Название</td>
                            <td>Размер</td>
                            <td>Урон</td>
                            <td>НР</td>
                            <td>Скорость</td>
                            <td>Дальность</td>
                            <td>Покупка</td>
                            <td>Уничтожен</td>
                        </tr>
                        <tr>
                            <td>${all_units.names[index]}</td>
                            <td>${all_units.size [index]}</td>
                            <td>${all_units.dmg  [index]}</td>
                            <td>${all_units.hp   [index]}</td>
                            <td>${all_units.dv   [index]}</td>
                            <td>${all_units.da   [index]}</td>
                            <td>${all_units.buy  [index]}</td>
                            <td>${all_units.rev  [index]}</td>
                        </tr>
                    </table>
                </div>`
            }
        }
        //отчет
        console.log(`Отчет \n\nНайдено юнитов: ${found_units}\nДеньги:${money}\nУрон:${dmg_min}\nОЗ:${hp_min}`)
    }
}

/*onload*/{

}
