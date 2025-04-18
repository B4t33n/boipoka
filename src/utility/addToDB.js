const getItems = ()=>{
    const strodeBook = localStorage.getItem("readingList");

    if (strodeBook) {
        const strodeBookData = JSON.parse(strodeBook);
        return strodeBookData;
    }
    else{
        return [];
    }
}


const addItems = (id)=>{
    const strodeBookData = getItems();
     
    if (strodeBookData.includes(id)) {
        alert("items already exist")
    }else{
        strodeBookData.push(id);
        const data = JSON.stringify(strodeBookData);
        localStorage.setItem("readingList", data)
    }
}

export {addItems}