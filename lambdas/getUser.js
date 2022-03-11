const Responses = require('./API_Responses');
// import { addDays, format } from "date-fns"

const { addDays } = require('date-fns')
const { format } = require('date-fns')

exports.handler = async event => {
    console.log('event', event);

    const inverterData = (data) =>{
        const dataEmString = format(data, 'dd/MM/yyyy')
        
        const dataSemBarras = dataEmString.split('/').join('')
    
        const digitoFinalDia = 1
        const digitoFinalMes = 3
    
        const dataReversa = dataSemBarras.split('').reverse().map((currentDigit, index)=> {
        if([digitoFinalDia, digitoFinalMes].includes(index))
                return currentDigit + '/'
            return currentDigit
        }).join('')
    
        return dataReversa
    }
    
    const quandoProxDataPalindroma = (ano, mes, dia) => {
        const hoje = new Date(ano, mes, dia, 1, 1, 1, 1)
    
        let proxDataPalin
    
        let possivelProxDataPalin = hoje

        for(possivelProxDataPalin; format(possivelProxDataPalin, 'dd/MM/yyyy') != inverterData(possivelProxDataPalin); possivelProxDataPalin = addDays(possivelProxDataPalin, 1)){
            proxDataPalin = (addDays(possivelProxDataPalin, 1))
        }
    
        return { dia: format(proxDataPalin, 'dd'), mes:format(proxDataPalin, 'MM'), ano: format(proxDataPalin, 'yyyy')}
    }
    
    const alreadyPalin = (ano, mes, dia) =>{
        const check = new Date(ano, mes, dia, 0, 0,0,0)
        const checkString = format(check, 'dd/MM/yyyy')
    
        if(checkString != inverterData(check)){
            return true
        }
        else{
            return false
        }
    }


    let data = event.pathParameters.ID


    const requestData = data.toString().split('')
    
    const ano = requestData[0]+requestData[1]+requestData[2]+requestData[3];
    
    const mes = requestData[4]+requestData[5] - 1
    const dia = requestData[6]+requestData[7]
    
    if(alreadyPalin(ano,mes,dia) == true){
        return Responses._200(quandoProxDataPalindroma(ano , mes, dia))
    }
    else{
        const novoDia = parseInt(dia) + 1
        return Responses._200(quandoProxDataPalindroma(ano , mes, novoDia))
    }
    // const proxDataPalin = quandoProxDataPalindroma(ano , mes, dia)
    
    // console.log('a proxima data palindroma eh: ', proxDataPalin)
    
    // (quandoProxDataPalindroma(ano , mes, dia))

    if (!event.pathParameters || !event.pathParameters.ID) {
        // failed without an ID
        return Responses._400({ message: 'missing the parameters from the path' });
    }

    // if (requestData.length == 8) {
    //     // return the data
    //     console.log(quandoProxDataPalindroma(ano , mes, dia))
    //     return Responses._200((quandoProxDataPalindroma(ano , mes, dia)));  
    // }

    if (requestData.length < 8) {
        // return message error
        return Responses._400({message: 'api request not in correct format'});
    }

};