function onScroll() {
    if (scrollX > 0){
        navigation.classlist.add('scroll')
    } else{
        navigation.classlist.remove('scroll')
    }
}

