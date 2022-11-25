import { ReactNode } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckBoxProps extends Checkbox.CheckboxProps {
    children?: ReactNode;
    asChild?: boolean;
}

export function CheckBox(props : CheckBoxProps) {
    return (
        <Checkbox.Root
        className="w-6 h-6 p-[2px] bg-gray-800 rounded" {...props}>
        <Checkbox.Indicator asChild>
            <Check weight='bold' className='h-5 w-5 text-cyan-500'/>
        </Checkbox.Indicator>
    </Checkbox.Root>
    )
}