import Alert from "./Alert";
import ListGroup from "./components/ListGroup";
import Button from "./Button";
import { useState } from "react";

function App() {
  const items = [
    "javascript",
    "typescript",
    "javascript+SWC",
    "typescript+SWC",
  ];
  const handleSelect = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      <ListGroup items={items} heading="React" onSelectItem={handleSelect} />
      {alertVisible && (
        <Alert clickClose={() => setAlertVisible(false)}>
          <strong>Holy guacamole!</strong> I don't know any{" "}
          <strong>TypeScript!</strong>
        </Alert>
      )}

      <Button ifBtnClicked={() => setAlertVisible(true)}>Don't CLICK!!!</Button>
    </div>
  );
}
export default App;
