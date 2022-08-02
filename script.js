// ここから書いてください。
const battery =[{
        "batteryName": "WKL-78",
        "capacityAh": 2.3,
        "voltage": 14.4,
        "maxDraw": 3.2,
        "endVoltage": 10,
    },{
        "batteryName": "WKL-140",
        "capacityAh": 4.5,
        "voltage": 14.4,"maxDraw": 9.2,"endVoltage": 5,},
    {
        "batteryName": "Wmacro-78",
        "capacityAh": 2.5,
        "voltage": 14.5,
        "maxDraw": 10,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-140",
        "capacityAh": 3.6,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 5,
    },
    {
        "batteryName": "IOP-E78",
        "capacityAh": 6.6,
        "voltage": 14.4,
        "maxDraw": 10.5,
        "endVoltage": 8,
    },
    {
        "batteryName": "IOP-E140",
        "capacityAh": 9.9,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 10,
    },
    {
        "batteryName": "IOP-E188",
        "capacityAh": 13.2,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C65",
        "capacityAh": 4.9,
        "voltage": 14.8,
        "maxDraw": 4.9,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C85",
        "capacityAh": 6.3,
        "voltage": 14.4,
        "maxDraw": 6.3,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C140",
        "capacityAh": 9.8,
        "voltage": 14.8,
        "maxDraw": 10,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C290",
        "capacityAh": 19.8,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 12,
    }]
;

const camera =
    [{
        "brand": "Canon",
        "model": "ABC 3000M",
        "powerConsumptionWh": 35.5,
    },
    {
        "brand": "Canon",
        "model": "ABC 5000M",
        "powerConsumptionWh": 37.2,
    },
    {
        "brand": "Canon",
        "model": "ABC 7000M",
        "powerConsumptionWh": 39.7,
    },
    {
        "brand": "Canon",
        "model": "ABC 9000M",
        "powerConsumptionWh": 10.9,
    },
    {
        "brand": "Canon",
        "model": "ABC 9900M",
        "powerConsumptionWh": 15.7,
    },
    {
        "brand": "Go MN",
        "model": "UIK 110C",
        "powerConsumptionWh": 62.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 210C",
        "powerConsumptionWh": 64.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 230C",
        "powerConsumptionWh": 26.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 250C",
        "powerConsumptionWh": 15.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 270C",
        "powerConsumptionWh": 20.3,
    },
    {
        "brand": "VANY",
        "model": "CEV 1100P",
        "powerConsumptionWh": 22,
    },
    {
        "brand": "VANY",
        "model": "CEV 1300P",
        "powerConsumptionWh": 23,
    },
    {
        "brand": "VANY",
        "model": "CEV 1500P",
        "powerConsumptionWh": 24,
    },
    {
        "brand": "VANY",
        "model": "CEV 1700P",
        "powerConsumptionWh": 25,
    },
    {
        "brand": "VANY",
        "model": "CEV 1900P",
        "powerConsumptionWh": 26,
    }];

function makeBrandList(){
    let ans = [];
    for(let i = 0; i < camera.length; i++)ans.push(camera[i]["brand"]);
    return [...new Set(ans)];
}
let target = document.getElementById("target");
let brandDiv = document.createElement("div");
let modelDiv = document.createElement("div");
let powerDiv = document.createElement("div");
let batteryDiv = document.createElement("div");
let brandSelect = document.createElement("select");
let modelSelect = document.createElement("select");
let powerInput = document.createElement("input");
let batteryDivList = document.createElement("div");
batteryDivList.setAttribute("id", "battery-list");

target.classList.add("col-10", "m-auto");

let brandP = document.createElement("p");
brandP.classList.add("my-0");
brandP.innerHTML = "Step1: Select your brand";
brandDiv.append(brandP);
let modelP = document.createElement("p");
modelP.innerHTML = "Step2: Select your model";
modelDiv.append(modelP);
let powerP = document.createElement("p");
powerP.innerHTML = "Step3: Input accessory power consumption";
powerDiv.append(powerP);
let batteryP = document.createElement("p");
batteryP.innerHTML = "Step4: Choose your battery";
batteryDiv.append(batteryP);
batteryDiv.append(batteryDivList);

//brand

const cameraBrandList = makeBrandList();

let brandData = cameraBrandList[0];

for(let i = 0; i < cameraBrandList.length; i++){
    let option = document.createElement("option");
    option.setAttribute("value", cameraBrandList[i]);
    option.innerHTML = cameraBrandList[i];
    brandSelect.append(option);
}

brandDiv.append(brandSelect);

//model

function makeModelSelectList(){
    for(let i = 0; i < camera.length; i++){
        if(brandData == camera[i]["brand"]){
            let option = document.createElement("option");
            option.setAttribute("value", i);
            option.innerHTML = camera[i]["model"];
            modelSelect.append(option);
        }
    }
}

//first model list

makeModelSelectList();

modelDiv.append(modelSelect);

brandSelect.addEventListener('change', e => {
    brandData = e.target.value;
    modelSelect.innerHTML = '';
    makeModelSelectList();
})

//power

powerInput.setAttribute("id", "wattage");
powerInput.setAttribute("type", "number");
powerInput.setAttribute("value", "55");
powerInput.setAttribute("min", "0");
powerInput.setAttribute("max", "100");
powerDiv.append(powerInput);

//battery

class Battery {
    constructor(batteryName, capacityAh, voltage, maxDraw, endVoltage){
        this.batteryName = batteryName;
        this.capacityAh = capacityAh;
        this.voltage = voltage;
        this.maxDraw = maxDraw;
        this.endVoltage = endVoltage;
    }

    maxWatt(){
        return this.capacityAh * this.voltage;
    }

    endWatt(){
        return this.endVoltage * this.maxDraw;
    }
    
    maxUseHour(sumWatt){
        return (this.maxWatt() / sumWatt).toFixed(1);
    }

    createBattElement(sumWatt){
        const battEleDiv = document.createElement('div');
        battEleDiv.classList.add('w-100', 'bg-light', 'border', 'border-secondary', 'd-flex', 'flex-row', 'justify-content-between', 'align-items-center');
        const battNameP = document.createElement('p');
        battNameP.classList.add('pl-2', 'pb-2', 'pt-2', 'm-0');
        const battNameS = document.createElement('strong');
        battNameS.innerHTML = this.batteryName;
        battNameP.append(battNameS);
        const battInfoP = document.createElement('p');
        battInfoP.classList.add('pl-2', 'pb-2', 'pt-2', 'mt-0', 'mb-0', 'ml-0', 'mr-2');
        battInfoP.innerHTML = 'Estimate ' + this.maxUseHour(sumWatt) + ' hours';
        battEleDiv.append(battNameP, battInfoP);
        return battEleDiv;
    }
}

const batteryObjects = [];
battery.forEach( batt => {
    batteryObjects.push(new Battery(batt['batteryName'], batt['capacityAh'], batt['voltage'], batt['maxDraw'], batt['endVoltage']));
});

modelSelect.addEventListener('change', updateBattList);

powerInput.addEventListener('change', updateBattList);

// batteryの初期リストを作成

const batteryTopDiv = document.getElementById('battery-list');
batteryObjects.forEach( battObj => {
    batteryDivList.append(battObj.createBattElement(parseInt(powerInput.value) + camera[modelSelect.value].powerConsumptionWh));
});

function updateBattList(){
    const sumWatt = parseInt(powerInput.value) + camera[modelSelect.value].powerConsumptionWh;
    batteryDivList.innerHTML = '';
    batteryObjects.forEach(batt => {
        if (batt.endWatt() > sumWatt){
            batteryDivList.append(batt.createBattElement(sumWatt));
        }
    });
}


//append to target
target.append(brandDiv);
target.append(modelDiv);
target.append(powerDiv);
target.append(batteryDiv);
console.log(battery);
console.log(camera);