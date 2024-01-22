import { render, screen } from "@testing-library/react"
import Contectus from "../Contectus";
import "@testing-library/jest-dom";


test("Should load contact us component", () =>{
        render(< Contectus />);

      const heading = screen.getByRole("heading");

      expect(heading).toBeInTheDocument();
      
});


test("Should load contact us component", () =>{
        render(< Contectus />);

        const inputBoxes = screen.getAllByRole("textbox");

        console.log(inputBoxes.length);
      

        expect(inputBoxes.length).toBe(3);
});



