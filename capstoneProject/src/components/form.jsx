function UserForm() {
        return (
            <section>
            <div className="section3" id="contact">
                <h2>Have Questions About Planetary Science?</h2>
                <p>
                Interested in learning more about space, astronomy, or how planetary
                data is collected and analyzed? Reach out and we’ll get back to you.
                </p>

                <form>
                <div className="form_items">
                    <label htmlFor="name">Full Name <span style={{ color: "red" }}>*</span></label>
                    <input type="text" id="name" placeholder="Full name" required />
                </div>

                <div className="form_items">
                    <label htmlFor="email">Email <span style={{ color: "red" }}>*</span></label>
                    <input type="email" id="email" placeholder="example@email.com" required />
                </div>

                <div className="form_items">
                    <label htmlFor="city">City <span style={{ color: "red" }}>*</span></label>
                    <input list="cities" id="city" placeholder="Choose your city" />
                    <datalist id="cities">
                    <option value="Nigeria" />
                    <option value="USA" />
                    <option value="UK" />
                    <option value="Russia" />
                    <option value="China" />
                    </datalist>
                </div>

                <div className="form_items">
                    <label htmlFor="phone">Phone Number <span style={{ color: "red" }}>*</span></label>
                    <input type="tel" id="phone" placeholder="Enter phone number" required />
                </div>

                <div className="form_items">
                    <label htmlFor="message">Message <span style={{ color: "red" }}>*</span></label>
                    <textarea id="message" placeholder="Enter your message"></textarea>
                </div>

                <button type="submit">Submit</button>
                </form>
            </div>
            </section>
        );
}

export default UserForm;