lib.mainMenu = COA
lib.mainMenu {
    10 = HMENU
    10 {
        entryLevel = 0
        1 = TMENU
        1 {
            expAll = 1
            noBlur = 1
            wrap = <ul class="nav navbar-nav">|</ul>
            NO {
                wrapItemAndSub = <li>|</li>
            }
            ACT < .NO
            ACT = 1
            ACT {
                wrapItemAndSub = <li class="active">|</li>
            }
            CUR < .ACT
            CUR = 1

        }

    }
}