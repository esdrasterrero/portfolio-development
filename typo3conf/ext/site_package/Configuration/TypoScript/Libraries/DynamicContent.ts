#Automatically get Column positions from Backend Layouts in Fluid Templates
lib.dynamicContent = COA
lib.dynamicContent {
    5 = LOAD_REGISTER
    5  {
        colPos.cObject = TEXT
        colPos.cObject {
            value.current = 1
            ifEmpty = 0
        }
    }
    20 < styles.content.get
    20.select.where = colPos={register:colPos}
    20.select.where.insertData = 1
}
lib.dynamicContentSlide < lib.dynamicContent
lib.dynamicContentSlide.20.slide = -1