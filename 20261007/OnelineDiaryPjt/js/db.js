const memberDB = new Map();

/* MEMBER DB START */
// sign-up(Create)
const addMember = (id, pw, mail) => {
    console.log('addMember() CALLED!!');

    memberDB.set(id, {
        u_id: id,
        u_pw: pw,
        u_mail: mail
    });

    console.log(memberDB.get(id));

}

// sign-in(Read)
const searchMember = (id, pw) => {
    console.log('searchMember() CALLED!!');
    
    let memberObj = memberDB.get(id);
    if (memberObj !== undefined && memberObj.u_pw === pw) {
        console.log('SIGN-IN SUCCESS!!');
        return true;

    } 

    console.log('SIGN-IN FAIL!!');
    return false;

}
/* MEMBER DB END */