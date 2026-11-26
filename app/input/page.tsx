
import Input from "@/app/componentes/Input";

export default function InputPage() {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold">
                Página de Inputs
            </h1>

            <p>
                Exemplos de utilização de inputs, seletores
                e gestão de tarefas com React.
            </p>

            <Input />
        </div>
    );
}
