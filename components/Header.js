function Header() {
    return (
        <div className="header sticky top-0 z-[1000] overflow-hidden">
            <header className=" flex ml-4 mr-5 py-3  items-center h-auto ">
                <div className="brand">Dreams</div>
                <div className="logo float-right ml-auto h-5 -mt-6 w-10">
                        <img src="/images/cart.svg"></img>
                </div>
                
            </header>
        </div>
    )
}

export default Header
