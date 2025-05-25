import { useConfigurator } from "./configurator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Switch } from "./ui/switch";

const Selection = () => {
  const { bottom, top, vase1, vase2, setBottom, setTop, setVase1, setVase2 } =
    useConfigurator();

  return (
    <div className="absolute top-5 right-5 z-10 flex w-full max-w-sm flex-col gap-2">
      <Select defaultValue={top} onValueChange={setTop}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Пам&#39;ятник" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="Top1-1">Пам&#39;ятник 1</SelectItem>
          <SelectItem value="Top2-1">Пам&#39;ятник 2</SelectItem>
          <SelectItem value="Top3-1">Пам&#39;ятник 3</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue={bottom} onValueChange={setBottom}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Надгробок" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="Bottom1-1">Надгробок 1</SelectItem>
          <SelectItem value="Bottom2-1">Надгробок 2</SelectItem>
          <SelectItem value="Bottom3-1">Надгробок 3</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex items-center gap-2 justify-between">
        <p>Додати вазу</p>
        <Switch
          checked={vase1 !== ""}
          onCheckedChange={
            setVase1 ? () => setVase1(vase1 === "" ? "Vase1-1" : "") : undefined
          }
        />
      </div>

      {vase1 && (
        <Select defaultValue={vase1} onValueChange={setVase1}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Розміщення вази" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="Vase1-1">Розміщення вази 1</SelectItem>
            <SelectItem value="Vase1-2">Розміщення вази 2</SelectItem>
            <SelectItem value="Vase1-3">Розміщення вази 3</SelectItem>
            <SelectItem value="Vase1-4">Розміщення вази 4</SelectItem>
          </SelectContent>
        </Select>
      )}

      <div className="flex items-center gap-2 justify-between">
        <p>Додати лампадку</p>

        <Switch
          checked={vase2 !== ""}
          onCheckedChange={
            setVase2 ? () => setVase2(vase2 === "" ? "Vase2-1" : "") : undefined
          }
        />
      </div>

      {vase2 && (
        <Select defaultValue={vase2} onValueChange={setVase2}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Розміщення лапмадки" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="Vase2-1">Розміщення лапмадки 1</SelectItem>
            <SelectItem value="Vase2-2">Розміщення лапмадки 2</SelectItem>
            <SelectItem value="Vase2-3">Розміщення лапмадки 3</SelectItem>
            <SelectItem value="Vase2-4">Розміщення лапмадки 4</SelectItem>
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

export default Selection;
