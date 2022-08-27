const work = document.getElementById("work")
const view = document.getElementById("view")

$(work).hide()

$(view).click(function() {
    $(work).attr("id", "work2")
    $(work).show()
})

