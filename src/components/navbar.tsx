import { Button } from "@/components/ui/button"
function Navbar_comp(){
    return(
    <>
    <Button asChild>
        <a href="/goal">Contact</a>
    </Button>

    <Button><a href="/ga">Home</a></Button>
    </>
    )
} 

export default Navbar_comp
