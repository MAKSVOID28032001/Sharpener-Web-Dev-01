let amo = 0;
function formdata(event) {
    event.preventDefault();

    let eid = document.getElementById("EID").value;
    let pnm = document.getElementById("PNM").value;
    let pam = document.getElementById("PAM").value;
    let birth = document.getElementById("BIRTH").value;

    let OBJ = { eid, pnm, pam, birth };

    ULADDLI(OBJ);
    document.getElementById("EID").value = '';
    document.getElementById("PNM").value = '';
    document.getElementById("PAM").value = '';
    document.getElementById("BIRTH").value = '';
    totalexpense();
}
function totalexpense() {
    let amos = document.getElementById("val");
    amo = 0;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            let storedData = localStorage.getItem(key);
            let data = JSON.parse(storedData);
            amo += parseInt(data.pam);
        }
    }
    amos.innerHTML = `&nbsp; ${amo} Rs.`;
}
function ULADDLI(OBJ) {
    let amos = document.getElementById("val");
    let UL = document.getElementById("UL");
    let LL = document.createElement('li');
    LL.classList.add('LIST');

    let Div1 = document.createElement('div');
    Div1.classList.add('PLI');
    Div1.innerHTML = `${OBJ.eid}`;

    let Div2 = document.createElement('div');
    Div2.classList.add('PLI');
    Div2.innerHTML = `${OBJ.pnm}`;

    let Div3 = document.createElement('div');
    Div3.classList.add('PLI');
    Div3.innerHTML = `${OBJ.pam}`;

    let Div4 = document.createElement('div');
    Div4.classList.add('PLI');
    Div4.innerHTML = `${OBJ.birth}`;

    let ii = document.createElement("i");
    ii.classList.add("fa-solid", "fa-trash-can", "del");
    ii.style.color = "red";
    ii.addEventListener("click", (event) => {
        let listitem = event.target.parentElement;
        let lsid = OBJ.eid;
        amo -= parseInt(OBJ.pam);
        amos.innerHTML = `&nbsp; ${amo} Rs.`;

        localStorage.removeItem(lsid);
        UL.removeChild(listitem);
    });

    let ii1 = document.createElement("i");
    ii1.classList.add("fa-solid", "fa-pen-to-square", "edt");
    ii1.style.color = "yellow";
    ii1.addEventListener("click", () => {
        let lsid = OBJ.eid;
        let dataString = localStorage.getItem(lsid);
        let data = JSON.parse(dataString);

        document.getElementById("EID").value = data.eid;
        document.getElementById("PNM").value = data.pnm;
        document.getElementById("PAM").value = data.pam;
        document.getElementById("BIRTH").value = data.birth;

        amo = amo - parseInt(data.pam);
        amos.innerHTML = `&nbsp; ${amo} Rs.`;

        localStorage.removeItem(lsid);
        UL.removeChild(LL);
    });

    LL.appendChild(Div1);
    LL.appendChild(Div2);
    LL.appendChild(Div3);
    LL.appendChild(Div4);
    LL.appendChild(ii);
    LL.appendChild(ii1);
    UL.appendChild(LL);

    localStorage.setItem(OBJ.eid, JSON.stringify(OBJ));
}
document.addEventListener("DOMContentLoaded", () => {
    let UL = document.getElementById("UL");
    let amos = document.getElementById("val");
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            let storedData = localStorage.getItem(key);
            let data = JSON.parse(storedData);

            let LL = document.createElement('li');
            LL.classList.add('LIST');

            let Div1 = document.createElement('div');
            Div1.classList.add('PLI');
            Div1.innerHTML = `${data.eid}`;

            let Div2 = document.createElement('div');
            Div2.classList.add('PLI');
            Div2.innerHTML = `${data.pnm}`;

            let Div3 = document.createElement('div');
            Div3.classList.add('PLI');
            Div3.innerHTML = `${data.pam}`;

            let Div4 = document.createElement('div');
            Div4.classList.add('PLI');
            Div4.innerHTML = `${data.birth}`;

            let ii = document.createElement("i");
            ii.classList.add("fa-solid", "fa-trash-can", "del");
            ii.style.color = "red";
            ii.addEventListener("click", (event) => {
                let listitem = event.target.parentElement;
                let lsid = data.eid;

                amo = amo - parseInt(data.pam);
                amos.innerHTML = `&nbsp; ${amo} Rs.`;

                localStorage.removeItem(lsid);
                UL.removeChild(listitem);
            });

            let ii1 = document.createElement("i");
            ii1.classList.add("fa-solid", "fa-pen-to-square", "edt");
            ii1.style.color = "yellow";
            ii1.addEventListener("click", () => {
                let lsid = data.eid;
                let dataString = localStorage.getItem(lsid);
                let data1 = JSON.parse(dataString);

                document.getElementById("EID").value = data1.eid;
                document.getElementById("PNM").value = data1.pnm;
                document.getElementById("PAM").value = data1.pam;
                document.getElementById("BIRTH").value = data1.birth;

                amo = amo - parseInt(data1.pam);
                amos.innerHTML = `&nbsp; ${amo} Rs.`;

                localStorage.removeItem(lsid);
                UL.removeChild(LL);
            });

            LL.appendChild(Div1);
            LL.appendChild(Div2);
            LL.appendChild(Div3);
            LL.appendChild(Div4);
            LL.appendChild(ii);
            LL.appendChild(ii1);
            UL.appendChild(LL);
        }
    }
});
totalexpense();