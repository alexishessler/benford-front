import axios from 'axios';

import { 
    IMPORT_FILE_FAIL,
    IMPORT_FILE_LOADING,
    IMPORT_FILE_TEST,
} from "../types/types";

export const importFile = (file, rawFile) => async (dispatch, getState) => {
    
    try {

        dispatch({ 
            type: IMPORT_FILE_LOADING,
        })

        const config = {
            headers: {
              'Content-Type': 'application/json',
                //Authorization: `Bearer ${userInfo.token}`, // no needed token yet
            },
        }

        const { data } = await axios.post(
            // `/api/upload-file`,
            `${window.env.URL}/api/upload-file`,
            file,
            config
        )

        if(data.result){

            let differencesFreqSumArray = [];
            let matchingScore = 0;

            const duplicatedbenfordizedData = [...data.benfordizedData]
            const toFixedData = duplicatedbenfordizedData.map(number => {
                differencesFreqSumArray.push(0+Math.abs(Number(number.differenceFrequencyPercent.toFixed(4))))
                console.log("differencesFreqSum", differencesFreqSumArray)
                return (
                    {
                        BenfordFrequency: Number(number.BenfordFrequency.toFixed(2)),
                        BenfordFrequencyPercent: (Number(number.BenfordFrequencyPercent)*100).toFixed(2),
                        dataFrequency: Number(number.dataFrequency.toFixed(2)),
                        dataFrequencyPercent: (Number(number.dataFrequencyPercent)*100).toFixed(2),
                        differenceFrequency: Number(number.differenceFrequency.toFixed(2)),
                        differenceFrequencyPercent: Number(number.differenceFrequencyPercent.toFixed(4)),
                        n: Number(number.n)
                    }
                )
            })

            data.noFixedbenfordizedData = data.benfordizedData;
            data.benfordizedData = toFixedData;
            data.sentFile = rawFile
            data.differencesFreqSumArray = differencesFreqSumArray

            // CALCUL DU SCORE A CHANGER COMPLETEMENT
            differencesFreqSumArray.forEach(score => {
                matchingScore +=score
            })

            console.log("MATCHING SCORE 1 ----> ", matchingScore)

            matchingScore = 100 - (matchingScore*100)

            console.log("MATCHING SCORE 2 ----> ", matchingScore)

            if(matchingScore <= 70){
                data.matchingScore = 0
            } else if(matchingScore >= 71 && matchingScore <= 75){
                data.matchingScore = 1
            } else if(matchingScore >= 76 && matchingScore <= 80){
                data.matchingScore = 2
            } else if(matchingScore >= 81 && matchingScore <= 85) {
                data.matchingScore = 3
            } else if(matchingScore >= 86 && matchingScore <= 90){
                data.matchingScore = 4
            } else {
                data.matchingScore = 5
            }

            // simulate large file for testing
            setTimeout(() => {
                dispatch({ 
                    type: IMPORT_FILE_TEST,
                    payload: data,
                })
            }, 0);
        } else {
            // simulate large file for testing
            setTimeout(() => {
                dispatch({ 
                    type: IMPORT_FILE_FAIL,
                    payload: data.error,
                })
            }, 0);
         }

    } catch(error) {

        // simulate large file for testing
        setTimeout(() => {
            dispatch({ 
                type: IMPORT_FILE_FAIL,
                payload: error,
            })
        }, 0);

    }

};