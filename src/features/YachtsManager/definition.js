const definition = {
  name: 'yAcht',
  fields: [
    { name: 'newname', label: 'New name' , summary: 1 },
    { name: 'oldname', label: 'Old name', summary: 2 },
    { name: 'newreg', label: 'New Registration', summary: 3 },
    { name: 'builder', label: 'Build', summary: 4 },
    { name: 'hull', label: 'HIN #',  summary: 5 },
    { name: 'owner', label: 'Owner', summary: 6},
    { name: 'corp', label: 'Corp/LLC', summary: 7 },
    { name: 'cin', label: 'CIN #'},
    { name: 'sellingbroker', label: 'Selling broker' },
    { name: 'brokeragehouse', label: 'Brokerage house' },
    { name: 'length'},
    { name: 'beam' },
    { name: 'depth' },
    { name: 'dinghyreg', label: 'Old Registration' },
    { name: 'flag' },
    { name: 'hailingport', label: 'Hailing Port' },
    { name: 'oldreg', label: 'Tender Make' },
    { name: 'tender' , label: 'Tender Registration'},
    { name: 'hin' , label: 'Tender HIN #'},
    { name: 'documentation', type : 'textarea' , label: 'Doc Address'},
    { name: 'mailing', label: 'Mail Address' },
    { name: 'email'},
    { name: 'phone', type: 'tel' },
    { name: 'lienholder', label: 'Lien Holder' },
    { name: 'lien' , label: 'Lien Amount'},
    { name: 'fileno', label: 'File No' },
    { name: 'storage' },
    { name: 'id', type: 'number' },
    { name: 'notes', type: 'textarea' },
  ]
}


export default definition;