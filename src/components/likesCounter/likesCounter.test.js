import { screen,render } from "@testing-library/react";
import {LikeCounter} from './likesCounter'

test("Checking for Home Link",()=>
{
    render(<LikeCounter/>);

    const hyperlink = screen.getByText(/Home/i);
    expect(hyperlink).toBeInTheDocument();
    expect(hyperlink).toHaveAttribute("href");
});

test("Checking for Counter Value",()=>{
    render(<LikeCounter/>);

    const counter = screen.getByTestId("counter");
    expect(counter).toHaveTextContent("1");
})