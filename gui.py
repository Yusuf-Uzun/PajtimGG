import tkinter as tk


def create_window():
    window = tk.Tk()
    window.title('League of Legend op.gg')
    window.geometry("800x600")
    T = tk.Text(window, height=400, width=200)
    T.pack(side=tk.RIGHT, fill=tk.Y)
    T.insert(tk.END, 'Test')
    window.mainloop()

