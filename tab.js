let TABS=document.querySelectorAll(".tab");
let ACTIVETABS=[]

function AppendTabListener(TabID) {
    ACTIVETABS.push(0)
    let Tab=document.getElementById(TabID);
    Tab.addEventListener("click", function () {
        for (let i=0; i<ACTIVETABS.length; i++) {
            if (ACTIVETABS[i]==1) {
                ACTIVETABS[i]=0;
            }
            if (TABS[i].id==TabID) {
                ACTIVETABS[i]=1;
            }
        }
        Update();
    })
}

function UpdateVisibility(elementID, state) {
    if (state==1) {
        document.getElementById(elementID).style.display="block";
    }
    else if (state==0) {
        document.getElementById(elementID).style.display="none";
    }
    else {
        console.error("Invalid state provided to UpdateVisibility");
    }
}

function UpdateTabActive() {
    let TabActive=null;
    i=0;
    ACTIVETABS.forEach(function (tab) {
        if (tab==1) {
            TabActive=TABS[i];
        }
        i++;
    });
    TABS.forEach(function (tab) {
        tab.classList.remove("active");
    });
    TabActive.classList.add("active");
}

function Update() {
    UpdateTabActive();
}

AppendTabListener("home-tab")
AppendTabListener("resources-tab")
Update();
