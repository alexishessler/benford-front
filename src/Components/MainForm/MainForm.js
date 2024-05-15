import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdFileUpload } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import { Text } from '../../StyledComponents/Title';
import { importFile } from '../../redux/actions/importfile.action';
import './MainForm.css';

const MainForm = ({allowedExtensions}) => {

    const dispatch = useDispatch()
    const darkMode = useSelector((state) => state.darkMode)

    const [ selectedFile, setSetlectedFile] = useState({
        data: null,
        name: null,
        error: null,
    })
    const [ colName, setcolName] = useState("")
    const [ separator, setSeparator] = useState("")
    const { data, name, error } = selectedFile

    const fileInputRef = useRef(); 

    const hasExtension = (fileName, extentions) => {
        return (new RegExp('(' + extentions.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
    }

    const handleUpload = (e) => {
        // console.log(e.target.files[0])
        const name = e.target.files[0] ? e.target.files[0].name.split('\\').pop() : null
        if(hasExtension(name, allowedExtensions)){
            setTimeout(() => {
                const section = document.querySelector('#scrollToUploaderDivBottom');
                section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
            }, 500);
            setSetlectedFile({
                data: e.target.files[0],
                name,
                error: null
            })
        } else {
            setSetlectedFile({
                data: null,
                name: null,
                error: "Fichier non valable. Vérifiez l'extention.",
            })
            setcolName("")
            setSeparator("")
            console.log("fileInputRef", fileInputRef)
            fileInputRef.current.value = "";
        }
    }
    const handleChangeSeparator = (e) => {
        console.log(separator)
        setSeparator(e.target.value)
        if(separator.length === 0){
            setTimeout(() => {
                const section = document.querySelector('#scrollToUploaderInputDivBottom');
                section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
            }, 500);
        }
    }

    const handleChangeCol = (e) => {
        setcolName(e.target.value)
        if(colName.length === 0){
            setTimeout(() => {
                const section = document.querySelector('#scrollToUploaderInputDivBottom');
                section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
            }, 500);
        }
    }


    const handleBenfordization = async () => {

        const data = new FormData();
        data.append('file', selectedFile.data)
        data.append('columnname', colName)
        data.append('separator', separator)

        dispatch(importFile(data, selectedFile.data))
        
        let fakeResponse = true
        if(fakeResponse){
            setTimeout(() => {
                const section = document.querySelector('#scrollToUploaderDivTop');
                section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                setTimeout(() => {
                    setSetlectedFile({
                        data: null,
                        name: null,
                        error: null,
                    })
                    setcolName("")
                    setSeparator("")
                    console.log("fileInputRef", fileInputRef)
                    fileInputRef.current.value = "";
                }, 800);
            }, 0);
        }
    }

    return (
        <div className="mainform">
            <input 
                ref={fileInputRef}
                onChange={handleUpload}
                    type="file" 
                    name="file" 
                    id="file" 
                    className="mainform_inputfile" />
                <label 
                    htmlFor="file" 
                    style={{position: 'relative' }}>
                        <MdFileUpload 
                            style={{position: 'absolute', top: 23, left: 25}}/> 
                                <span 
                                    style={{marginLeft: 10}}>
                                        {
                                            data ? "1 fichier sélectionné" : "Choisissez un fichier"
                                        }
                                </span>
                </label>

                
                { data && (
                    <Text darkmode={`${darkMode}`}>
                        { name}
                    </Text>
                ) }
                { error && (
                    <Text darkmode={`${darkMode}`}>
                        { error}
                    </Text>
                ) }



                { !error && data && (
                    <>
                        <AiFillCaretDown style={{fontSize: '4rem', marginTop: "-20px", marginBottom: "20px", color: "#4c64df"}}/>
                        <Text id="scrollToUploaderInputDivBottom" darkmode={`${darkMode}`}>
                            On y est preque ! Renseignez simplement le <strong>séparateur</strong> des différentes colonnes de votre fichier .csv 
                            <br/>Ecrivez , (pour virgule) ou ; (pour point-virgule) ou ainsi de suite, vous avez compris l'idée...
                        </Text>
                        <input type="text" className="mainform_inputtext" 
                        placeholder=", ou ;" 
                        onChange={handleChangeSeparator} 
                        value={separator}/>
                    </>
                ) }



                { !error && data && separator && (
                    <>
                        <AiFillCaretDown style={{fontSize: '4rem', marginTop: "-20px", marginBottom: "20px", color: "#4c64df"}}/>
                        <Text id="scrollToUploaderInputDivBottom" darkmode={`${darkMode}`}>
                            Plus qu'un petit effort... Maintenant, renseignez le nom de la colonne à analyser au sein de ce fichier :
                        </Text>
                        <input type="text" className="mainform_inputtext" 
                        placeholder="Nom de la colonne" 
                        onChange={handleChangeCol} 
                        value={colName}/>
                    </>
                ) }
                { !error && data && separator && colName && (
                    <>
                        <AiFillCaretDown style={{fontSize: '4rem', marginTop: "20px", marginBottom: "20px", color: "#4c64df"}}/>
                        <Text darkmode={`${darkMode}`}>
                            Parfait ! On valide le formulaire, et c'est parti ! 
                        </Text>
                        <input 
                            onClick={
                                !error && data && colName && handleBenfordization
                            }
                            type="button" 
                            className="mainform_inputbutton" 
                            value="Je benfordise mes données !"/>
                    </>
                ) }

                


        </div>
    )
}

export default MainForm;