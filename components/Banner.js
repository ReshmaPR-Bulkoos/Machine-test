function Banner() {
    return (
        <div className="banner overflow-hidden">
            <div className="xl:flex">
                <div>
                    <div className="xl:border-l-8  xl:border-[#E00E0E] xl:h-30 xl:absolute xl:ml-24 ">
                        <h1>Spice your Moods</h1>
                        <p className="sp">Spicy Vegetable Soup</p>
                    </div>
                    <div className="para">
                        Molestie ac feugiat sed lectus. Cursus sit amet dictum sit amet. Egestas diam in arcu cursus euismod quis viverra. Eget gravida cum sociis natoque penatibus et magnis.

                    </div>
                    <div className="flex button">
                        <div className="view">
                            <p>View Menu</p>
                        </div>
                        <div className="book">
                            <p>Book a Table</p>
                        </div>
                    </div>
                    <div className="flex button break">
                        <div className="breakfast">
                            <h1>Breakfast</h1>
                            <p>9.00 am - 11.00am</p>
                        </div>
                        <div className="arrow">
                            <img src="/images/arrow.svg"></img>
                        </div>
                    </div>
                </div>



                <div className="image">
                    <img src="/images/image1.jpg"></img>
                </div>
            </div>
        </div>
    )
}

export default Banner
