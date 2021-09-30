import React, { useEffect, useState } from 'react';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';

import { MaterialType } from '@/interfaces';
import { Backdrop } from '@/components/Backdrop';
import { IconButton } from '@/components/IconButton';
import { MaterialForm } from './MaterialForm';
import { MaterialItem } from './MaterialItem';

import {
    getAllMaterials,
    getAllMaterialsVariables,
    getMaterial,
    getMaterialVariables,
    GET_ALL_MATERIALS,
    GET_MATERIAL,
} from '@/graphql/teacher/query';
import { Wrapper } from '@/components/Wrapper';
import { MaterialFormType } from '@/interfaces/teacher';
import {
    addMaterial,
    addMaterialVariables,
    ADD_MATERIAL,
    updateMaterial,
    updateMaterialVariables,
    UPDATE_MATERIAL,
} from '@/graphql/teacher/mutation';

interface MaterialProps {}

export const Material: React.FC<MaterialProps> = ({}) => {
    const {
        loading: materialsLoading,
        data: materialsData,
        refetch,
    } = useQuery<getAllMaterials, getAllMaterialsVariables>(GET_ALL_MATERIALS, {
        variables: {
            teacherId: 2,
        },
    });
    const [fetchMaterial, { loading: materialLoading, data: materialData }] = useLazyQuery<
        getMaterial,
        getMaterialVariables
    >(GET_MATERIAL, { fetchPolicy: 'network-only' });
    const [addMaterial] = useMutation<addMaterial, addMaterialVariables>(ADD_MATERIAL);
    const [updateMaterial] = useMutation<updateMaterial, updateMaterialVariables>(UPDATE_MATERIAL);

    const [serverErrors, setServerErrors] = useState<FieldError[]>();
    const [selectedMaterial, setSelectedMaterial] = useState<MaterialFormType>(null);
    const [materials, setMaterials] = useState<MaterialType[]>(null);
    const [showMaterial, setShowMaterial] = useState(false);

    useEffect(() => {
        if (!materialsLoading && materialsData) setMaterials(materialsData.getAllMaterials);
    }, [materialsLoading, materialsData]);

    useEffect(() => {
        if (!materialLoading && materialData) {
            let data = { ...materialData.getMaterial };
            delete data.__typename;
            setSelectedMaterial(data);
            setShowMaterial(true);
        }
    }, [materialLoading, materialData, selectedMaterial?.id]);

    const onNewMaterialClick = () => {
        setSelectedMaterial(null);
        setShowMaterial(true);
    };
    const onMaterialItemClick = (data: MaterialType) => {
        fetchMaterial({ variables: { materialId: data.id, teacherId: 2 } });
    };
    const onMaterialSubmit = async (formData: MaterialFormType) => {
        let success = false;
        let subjects;
        if (formData.subjects) {
            subjects = [...formData.subjects];
            delete formData.subjects;
        }
        delete formData.id;
        if (selectedMaterial) {
            // edit
            let variables: updateMaterialVariables = {
                data: formData,
                materialId: selectedMaterial.id,
            };
            if (subjects) variables.subjects = subjects;
            let { data } = await updateMaterial({ variables });
            if (data.updateMaterial.entity) success = true;
            else if (data.updateMaterial.errors) setServerErrors(data.updateMaterial.errors);
        } else {
            let variables: addMaterialVariables = {
                data: formData,
                teacherId: 2,
            };
            if (subjects) variables.subjects = subjects;
            let { data } = await addMaterial({ variables });
            if (data.addMaterial.entity) success = true;
            else if (data.addMaterial.errors) setServerErrors(data.addMaterial.errors);
        }
        if (success) {
            refetch();
            setShowMaterial(false);
        }
    };
    const onMaterialClose = () => {
        setShowMaterial(false);
    };
    return (
        <>
            <section className="section">
                <div className="section-header">
                    <p className="title">Material</p>
                    <IconButton onClick={onNewMaterialClick} icon="plusCircle" size="md" />
                </div>
                <div className="divide-y-2 section-body">
                    <Wrapper loading={materialsLoading}>
                        {materials &&
                            materials.map((material) => (
                                <MaterialItem
                                    material={material}
                                    key={material.id}
                                    onClick={onMaterialItemClick}
                                />
                            ))}
                    </Wrapper>
                </div>
            </section>
            <Backdrop show={showMaterial} onClose={onMaterialClose}>
                <MaterialForm
                    serverErrors={serverErrors}
                    onSubmit={onMaterialSubmit}
                    selectedMaterial={selectedMaterial}
                    onClose={onMaterialClose}
                />
            </Backdrop>
        </>
    );
};
