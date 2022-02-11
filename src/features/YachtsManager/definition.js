const definition = {
  name: 'yAcht',
  fields: [
    { name: 'newname', label: 'New Name', summary: 1 },
    { name: 'oldname', label: 'Old Name', summary: 2 },
    { name: 'builder', summary: 3 },
    { name: 'hull', lable: 'Hull number', summary: 4 },
    { name: 'sellingbroker', label: 'Selling broker' , summary: 5},
    { name: 'brokeragehouse', label: 'Brokerage house' , summary: 6},
    { name: 'length', type: 'textarea' , summary: 7},
    { name: 'beam' , summary: 8},
    { name: 'depth' , summary: 9},
    { name: 'newreg', label: 'New Registration' , summary: 10},
    { name: 'dinghyreg', label: 'Dinghy Registration' , summary: 11},
    { name: 'flag' },
    { name: 'hailingport', label: 'Hailing Port' , summary: 12},
    { name: 'oldreg', label: 'Old Registration' , summary: 13},
    { name: 'tender' , summary: 14},
    { name: 'hin', summary: 15 },
    { name: 'owner', summary: 16 },
    { name: 'corp' },
    { name: 'documentation', type : 'textarea' , summary: 17},
    { name: 'mailing' },
    { name: 'email', type: 'textarea' , summary: 18},
    { name: 'phone', type: 'tel' },
    { name: 'lienholder', label: 'Lien Holder' , summary: 19},
    { name: 'lien' , summary: 20},
    { name: 'fileno', label: 'File No' , summary: 21},
    { name: 'storage' , summary: 22},
    { name: 'id', type: 'number' },
    { name: 'notes', type: 'textarea' },
  ]
}


export default definition;