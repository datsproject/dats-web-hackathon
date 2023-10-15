use solana_program::{
    account_info::next_account_info,
    account_info::AccountInfo,
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program_error::ProgramError,
    pubkey::Pubkey,
};

solana_program::declare_id!("DatsC9WF3T6j3qPz6MNLm8jsBbthxvixXJkjzXzegbzB");

#[derive(Debug, Default, Clone, Copy, PartialEq, Eq)]
pub struct DDos {
    pub id: u64,
    pub user: Pubkey,
    pub is_approve: bool,
    pub traffic_scale: u8,
}

#[derive(Debug, Default, Clone, Copy, PartialEq, Eq)]
pub struct SuperComputer {
    pub id: u64,
    pub user: Pubkey,
    pub is_approve: bool,
    pub cpu_value: u8,
}

#[derive(Debug, Default, Clone, Copy, PartialEq, Eq)]
pub struct CyberSecurity {
    pub id: u64,
    pub user: Pubkey,
    pub is_approve: bool,
    pub web_security: bool,
    pub server_security: bool,
    pub ransomware_research: bool,
    pub malware_research: bool,
}

#[derive(Debug, Default, Clone, Copy, PartialEq, Eq)]
pub struct Vulnerability {
    pub id: u64,
    pub user: Pubkey,
    pub is_approve: bool,
    pub web_penetration: bool,
    pub server_penetration: bool,
    pub scada_penetration: bool,
    pub blockchain_penetration: bool,
    pub contract_penetration: bool,
}

#[derive(Debug, Default, Clone, Copy, PartialEq, Eq)]
pub struct Blockchain {
    pub id: u64,
    pub user: Pubkey,
    pub approve_attack_prevention: bool,
}

solana_program::entrypoint!(process_instruction);

fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    let accounts_iter = &mut accounts.iter();

    let owner_account = next_account_info(accounts_iter)?;
    if owner_account.owner != program_id {
        return Err(ProgramError::IncorrectProgramId);
    }

    let mut dats_contract = DatsContract::load(owner_account)?;

    let all_ddos = dats_contract.get_all_user_ddos_settings()?;
    msg!("All DDos Settings: {:?}", all_ddos);

    let all_super_computer = dats_contract.get_all_user_super_computer_settings()?;
    msg!("All Super Computer Settings: {:?}", all_super_computer);

    let all_cyber_security = dats_contract.get_all_user_cyber_security_settings()?;
    msg!("All Cyber Security Settings: {:?}", all_cyber_security);

    let all_vulnerability = dats_contract.get_all_user_vulnerability_settings()?;
    msg!("All Vulnerability Settings: {:?}", all_vulnerability);

    let all_blockchain = dats_contract.get_all_user_blockchain_settings()?;
    msg!("All Blockchain Settings: {:?}", all_blockchain);

    Ok(())
}

struct DatsContract {
    pub owner: Pubkey,
    pub ddoses: Vec<DDos>,
    pub supers: Vec<SuperComputer>,
    pub cybers: Vec<CyberSecurity>,
    pub vulnerabilities: Vec<Vulnerability>,
    pub blockchains: Vec<Blockchain>,
}

impl DatsContract {
    pub fn load(account: &AccountInfo) -> Result<DatsContract, ProgramError> {
        let data = account.try_borrow_data()?;

        let (
            owner,
            ddoses_len,
            supers_len,
            cybers_len,
            vulnerabilities_len,
            blockchains_len,
            rest,
        ) = array_refs![
            data,
            32,
            8,
            8,
            8,
            8,
            8,
        ];

        let owner = Pubkey::new_from_array(*owner);
        let ddoses_len = u64::from_le_bytes(*ddoses_len);
        let supers_len = u64::from_le_bytes(*supers_len);
        let cybers_len = u64::from_le_bytes(*cybers_len);
        let vulnerabilities_len = u64::from_le_bytes(*vulnerabilities_len);
        let blockchains_len = u64::from_le_bytes(*blockchains_len);

        let mut ddoses = vec![];
        let mut supers = vec![];
        let mut cybers = vec![];
        let mut vulnerabilities = vec![];
        let mut blockchains = vec![];

        let mut offset = 0;

        for _ in 0..ddoses_len {
            let (id, user, is_approve, traffic_scale) = array_refs![
                &rest[offset..],
                8,
                32,
                1,
                1,
            ];

            let ddos = DDos {
                id: u64::from_le_bytes(*id),
                user: Pubkey::new_from_array(*user),
                is_approve: is_approve[0] != 0,
                traffic_scale: traffic_scale[0],
            };

            ddoses.push(ddos);
            offset += 42;
        }

        for _ in 0..supers_len {
            let (id, user, is_approve, cpu_value) = arrayrefs![
                &rest[offset..],
                8,
                32,
                1,
                1,
            ];

            let super_computer = SuperComputer {
                id: u64::from_le_bytes(*id),
                user: Pubkey::new_from_array(*user),
                is_approve: is_approve[0] != 0,
                cpu_value: cpu_value[0],
            };

            supers.push(super_computer);
            offset += 42;
        }

        for _ in 0..cybers_len {
            let (id, user, is_approve, web_security, server_security, ransomware_research, malware_research) = arrayrefs![
                &rest[offset..],
                8,
                32,
                1,
                1,
                1,
                1,
                1,
            ];

            let cyber_security = CyberSecurity {
                id: u64::from_le_bytes(*id),
                user: Pubkey::new_from_array(*user),
                is_approve: is_approve[0] != 0,
                web_security: web_security[0] != 0,
                server_security: server_security[0] != 0,
                ransomware_research: ransomware_research[0] != 0,
                malware_research: malware_research[0] != 0,
            };

            cybers.push(cyber_security);
            offset += 42;
        }

        for _ in 0..vulnerabilities_len {
            let (id, user, is_approve, web_penetration, server_penetration, scada_penetration, blockchain_penetration, contract_penetration) = arrayrefs![
                &rest[offset..],
                8,
                32,
                1,
                1,
                1,
                1,
                1,
                1,
            ];

            let vulnerability = Vulnerability {
                id: u64::from_le_bytes(*id),
                user: Pubkey::new_from_array(*user),
                is_approve: is_approve[0] != 0,
                web_penetration: web_penetration[0] != 0,
                server_penetration: server_penetration[0] != 0,
                scada_penetration: scada_penetration[0] != 0,
                blockchain_penetration: blockchain_penetration[0] != 0,
                contract_penetration: contract_penetration[0] != 0,
            };

            vulnerabilities.push(vulnerability);
            offset += 42;
        }

        for _ in 0..blockchains_len {
            let (id, user, approve_attack_prevention) = arrayrefs![
                &rest[offset..],
                8,
                32,
                1,
            ];

            let blockchain = Blockchain {
                id: u64::from_le_bytes(*id),
                user: Pubkey::new_from_array(*user),
                approve_attack_prevention: approve_attack_prevention[0] != 0,
            };

            blockchains.push(blockchain);
            offset += 41;
        }

        Ok(DatsContract {
            owner,
            ddoses,
            supers,
            cybers,
            vulnerabilities,
            blockchains,
        })
    }

    pub fn get_all_user_ddos_settings(&self) -> Result<Vec<DDos>, ProgramError> {
        Ok(self.ddoses.clone())
    }

    pub fn get_all_user_super_computer_settings(&self) -> Result<Vec<SuperComputer>, ProgramError> {
        Ok(self.supers.clone())
    }

    pub fn get_all_user_cyber_security_settings(&self) -> Result<Vec<CyberSecurity>, ProgramError> {
        Ok(self.cybers.clone())
    }

    pub fn get_all_user_vulnerability_settings(&self) -> Result<Vec<Vulnerability>, ProgramError> {
        Ok(self.vulnerabilities.clone())
    }

    pub fn get_all_user_blockchain_settings(&self) -> Result<Vec<Blockchain>, ProgramError> {
        Ok(self.blockchains.clone())
    }
}
