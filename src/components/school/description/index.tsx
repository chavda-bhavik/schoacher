import { Icon } from '@/static/Icons';

interface SchoolDescriptionProps {}

export const SchoolDescription: React.FC<SchoolDescriptionProps> = ({}) => {
    return (
        <section className="section">
            <div className="section-header">
                <p className="title">Description</p>
                <Icon icon="pencil" />
            </div>
            <div className="section-body">
                <div className="flex flex-row">
                    <Icon icon="loader" size="sm" className="m-1 mr-2 w-auto h-auto bg-white" />
                    <span className="text-lg mb-1 flex flex-row items-center py-1 w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nisi id
                        mi sollicitudin tempus a nec metus. Sed efficitur malesuada justo, id congue
                        augue sollicitudin mattis. Donec vel ex ornare, rutrum justo at, porttitor
                        libero. Curabitur in turpis nec dui pulvinar porttitor non in risus.
                        Maecenas sit amet facilisis lectus, at ornare purus. Cras commodo eget elit
                        vitae pellentesque. In viverra orci neque, ac ullamcorper tellus fringilla
                        ut. Vivamus luctus fringilla venenatis. Phasellus purus nunc, hendrerit a
                        convallis a, gravida vitae augue. Aenean tempus venenatis convallis.
                        Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </span>
                </div>
            </div>
        </section>
    );
};
