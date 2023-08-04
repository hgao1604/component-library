import Button from "./ui/Button/Button";
import Menu from "./ui/Menu/Menu";
import MenuItem from "./ui/Menu/MenuItem";
import SubMenu from "./ui/Menu/SubMenu";

export default function App() {
  return (
    <>
      <div className="container p-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-center text-3xl font-bold">Button type</h1>
          <div className="mt-10 flex items-center justify-center gap-12">
            <Button btnType={"primary"}>Primary</Button>
            <Button>Default</Button>
            <Button btnType={"danger"}>Danger</Button>
            <Button btnType={"link"} href="https://google.com">
              Link
            </Button>
            <Button disabled>Disable</Button>
          </div>
          <h1 className="mt-16 text-center text-3xl font-bold">Button Size</h1>
          <div className="mt-10 flex items-center justify-center gap-12">
            <Button size={"sm"}>Small</Button>
            <Button>Default</Button>
            <Button size={"lg"}>Large</Button>
          </div>
          <h1 className="mt-20 text-center text-3xl font-bold">Menu</h1>
          <div className="mt-10 flex items-center justify-center gap-12">
            <Menu>
              <MenuItem>Menu1</MenuItem>
              <MenuItem>Menu2</MenuItem>
              <MenuItem disabled={true}>Menu3</MenuItem>
            </Menu>
          </div>
          <div className="mt-10 flex items-center justify-center gap-12">
            <Menu mode={"vertical"}>
              <MenuItem>Menu1</MenuItem>
              <MenuItem>Menu2</MenuItem>
              <MenuItem disabled={true}>Menu3</MenuItem>
            </Menu>
          </div>
          <div className="mt-10 flex items-center justify-center gap-12">
            <Menu onSelect={(index) => alert(index)}>
              <MenuItem>Menu1</MenuItem>
              <MenuItem>Menu2</MenuItem>
              <MenuItem disabled={true}>Menu3</MenuItem>
              <SubMenu title="DropDown">
                <MenuItem>Menu4.1</MenuItem>
                <MenuItem>Menu4.2</MenuItem>
              </SubMenu>
            </Menu>
          </div>
          <div className="mt-10 flex items-center justify-center gap-12">
            <Menu mode="vertical" defaultOpenSubMenus={["0"]}>
              <SubMenu title="DropDown">
                <MenuItem>Menu1</MenuItem>
                <MenuItem>Menu1</MenuItem>
              </SubMenu>
              <MenuItem>Menu2</MenuItem>
              <MenuItem>Menu3</MenuItem>
              <MenuItem disabled={true}>Menu4</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}
