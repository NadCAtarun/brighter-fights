import {strategies} from "@/model/strategy";
import {CircleHelp} from "lucide-react";
import Link from "next/link";

const StrategySelector = ({value, onSelect}: { value: string, onSelect: (strategy: string) => void }) => {
    return (
        <div className="form-control">
            <label className="label" htmlFor="strategy">
                <div className="label-text text-xl">
                    Choose your strategy:
                    <Link href="/help/strategy" className="link link-primary link-hover">
                        <CircleHelp className="inline mx-2"/>
                    </Link>
                </div>
            </label>
            <select
                id="strategy"
                className="select select-bordered text-xl bg-base-200"
                value={value}
                onChange={(e) => onSelect(e.target.value)}
            >
                {strategies.map((strategy) => (
                    <option key={strategy.name} value={strategy.name}>
                        {strategy.description}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default StrategySelector;
