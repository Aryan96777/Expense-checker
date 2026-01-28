# 💰 Pro Expense Tracker (INR)

A professional personal finance tracking application developed during my Web Development Internship at Codec Technologies. This tool focuses on clean UI, data persistence, and real-time filtering.

## 🚀 Core Features
* **Indian Currency Support:** Uses the `Intl.NumberFormat` API to display amounts in the Indian numbering system (e.g., ₹1,00,000).
* **Browser Persistence:** Integrated with `localStorage` so your data remains saved even after closing the tab or browser.
* **Live Search & Filter:** Includes a real-time search bar to filter transactions by name or category using the `onkeyup` event.
* **Category Breakdown:** Specific categories for Indian users like "Food & Swiggy," "Amazon & Myntra," and "UPI Transfers."
* **Data Management:** Add new entries, delete specific items, or clear the entire dashboard with a single click.

## 🛠️ Technical Implementation

### 1. The Logic Flow (JavaScript)
The app uses a central array called `expenses`. 
* **Create:** New objects are pushed to the array using `Date.now()` as a unique ID.
* **Read:** The `updateUI()` function clears the list and re-renders it using template literals.
* **Delete:** The `.filter()` method removes specific items based on their unique ID.



### 2. Styling (CSS)
* **Mobile-First:** Built with a responsive container that works on phones and desktops.
* **UI/UX:** Uses a "Balance Card" design to highlight the total expenditure prominently.
* **Interactive Elements:** Transition effects on buttons and hover states for a modern feel.

## 📁 File Structure
* `index.html` - The structural layout and form inputs.
* `style.css` - The visual design and layout system.
* `script.js` - The functional logic, calculations, and storage handling.

## 💻 How to Run
1. Clone the repository.
2. Ensure all three files are in the same directory.
3. Open `index.html` in any web browser.
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3f969db5-a738-4533-8312-ff4c8d8c237c" />
